import "../css/resume.css"; // we will create this file

const ResumePopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const resumeUrl = "/AayushDogneResume.pdf"; // <-- put your resume inside public folder as resume.pdf

  const shareResume = () => {
    if (navigator.share) {
      navigator.share({
        title: "My Resume",
        text: "Check out my resume!",
        url: resumeUrl,
      });
    } else {
      alert("Sharing not supported on this device");
    }
  };

  const whatsappShare = () => {
    window.open(`https://wa.me/?text=Check my resume: ${window.location.origin}${resumeUrl}`);
  };

  const linkedinShare = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.origin}${resumeUrl}`
    );
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Aayush_Dogne_Resume.pdf";
    link.click();
  };

  const printResume = () => {
    window.open(resumeUrl, "_blank").print();
  };

  return (
    <div className="resume-overlay" onClick={onClose}>
      <div className="resume-popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2 className="title">My Resume</h2>

        <iframe
          src={resumeUrl}
          title="Resume"
          className="resume-frame"
        ></iframe>

        <div className="resume-actions">
          <button onClick={downloadResume}>⬇ Download</button>
          <button onClick={printResume}>🖨 Print</button>
          <button onClick={whatsappShare}>📱 WhatsApp</button>
          <button onClick={linkedinShare}>💼 LinkedIn</button>
          <button onClick={shareResume}>🔗 Share</button>
        </div>
      </div>
    </div>
  );
};

export default ResumePopup;
