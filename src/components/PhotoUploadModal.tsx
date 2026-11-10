import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePhoto } from '../context/PhotoContext';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, Upload, RotateCcw, User, Check, Camera, Info, ShieldCheck } from 'lucide-react';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const { photoUrl, usePlaceholder, setUsePlaceholder, updatePhoto, resetPhoto, isCustomPhoto } = usePhoto();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert(t('이미지 파일(JPG, PNG, WEBP)만 업로드할 수 있습니다.', 'Only image files (JPG, PNG, WEBP) are supported.'));
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      updatePhoto(dataUrl);
      setSuccessMsg(t('새로운 프로필 사진이 적용되었습니다.', 'New profile photo successfully applied.'));
      setTimeout(() => setSuccessMsg(null), 3000);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
              <Camera className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {t('프로필 사진 관리 및 교체', 'Profile Photo Management')}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-sm">
          {/* Current Preview */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-32 aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs shrink-0">
              {!usePlaceholder ? (
                <img
                  src={photoUrl}
                  alt="Profile Preview"
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-slate-100 dark:bg-slate-800">
                  <User className="w-8 h-8 text-slate-400 mb-1" />
                  <span className="text-[10px] text-slate-400 font-mono">Placeholder</span>
                </div>
              )}
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {t('현재 표시 상태:', 'Current Display State:')}
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {usePlaceholder
                  ? t('깔끔한 개발자 플레이스홀더 모드', 'Clean Developer Placeholder')
                  : isCustomPhoto
                  ? t('사용자 정의 커스텀 사진 적용 중', 'Custom Uploaded Photo Active')
                  : t('신지영 공식 검증 프로필 사진', 'Official Shin JiYoung Headshot')}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {t(
                  '본 포트폴리오는 임의의 AI 생성 얼굴을 절대 사용하지 않으며, 실제 증명사진 또는 깔끔한 플레이스홀더만을 표시합니다.',
                  'Strict integrity policy: Never uses random AI-generated faces. Only official photos or neutral placeholders.'
                )}
              </p>
            </div>
          </div>

          {successMsg && (
            <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-200 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-2 pt-2">
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />

            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 transition-colors"
            >
              <Upload className="w-4 h-4" />
              <span>{t('내 기기에서 사진 파일 업로드하기', 'Upload New Photo from Device')}</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setUsePlaceholder(!usePlaceholder);
                  setSuccessMsg(
                    !usePlaceholder
                      ? t('플레이스홀더 모드로 전환되었습니다.', 'Switched to placeholder mode.')
                      : t('사진 모드로 전환되었습니다.', 'Switched to photo mode.')
                  );
                  setTimeout(() => setSuccessMsg(null), 2500);
                }}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <User className="w-3.5 h-3.5 text-slate-500" />
                <span>{usePlaceholder ? t('사진 표시하기', 'Show Photo') : t('플레이스홀더 사용', 'Use Placeholder')}</span>
              </button>

              <button
                onClick={() => {
                  resetPhoto();
                  setSuccessMsg(t('기본 공식 사진으로 복원되었습니다.', 'Restored to default official photo.'));
                  setTimeout(() => setSuccessMsg(null), 2500);
                }}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                <span>{t('공식 사진으로 복원', 'Reset to Default')}</span>
              </button>
            </div>
          </div>

          {/* Static File Path Guide for permanent Git deployment */}
          <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
              <Info className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>{t('배포 시 영구 교체 방법 (Static Path)', 'Permanent File Replacement')}</span>
            </div>
            <p className="leading-relaxed">
              {t(
                '웹사이트 저장소의 `/public/assets/aistudio/KakaoTalk_20260903_103622711_02_3-_989012e7.jpg` 경로의 파일을 원하는 새 프로필 이미지로 덮어쓰기하면 영구적으로 적용됩니다.',
                'Replace the static file at `/public/assets/aistudio/KakaoTalk_...jpg` with your target image for permanent Git deployment.'
              )}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {t('완료', 'Done')}
          </button>
        </div>
      </div>
    </div>
  );
};
