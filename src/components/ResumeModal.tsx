
import { X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Create a simple PDF-like experience by opening images in new tabs
    window.open('/lovable-uploads/cfa968a8-521f-4316-915f-428be75af14d.png', '_blank');
    window.open('/lovable-uploads/0c75f82d-0b21-40b0-b0c5-28d66605a266.png', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative max-w-4xl w-full max-h-[90vh] mx-4 bg-background rounded-lg border border-border overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-xl font-semibold">My Resume</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-4">
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-2 shadow-lg">
              <img 
                src="/lovable-uploads/cfa968a8-521f-4316-915f-428be75af14d.png"
                alt="Resume Page 1"
                className="w-full h-auto rounded"
              />
            </div>
            <div className="bg-white rounded-lg p-2 shadow-lg">
              <img 
                src="/lovable-uploads/0c75f82d-0b21-40b0-b0c5-28d66605a266.png"
                alt="Resume Page 2"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
