import "./Styles/CVButton.css";

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../CV-Full-Stack-Web-Alan-Solis.pdf";
    link.download = "CV-Full-Stack-Web-Alan-Solis";
    link.click();
  };

  return (
    <button className="CVBtn" onClick={handleDownload}>
      Download CV
    </button>
  );
};

export default DownloadButton;
