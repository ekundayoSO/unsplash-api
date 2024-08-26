const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-900 text-white py-4 fixed right-0 left-0 bottom-0">
      <footer>
        <small>
          <p>Copyright&copy; {currentYear}</p>
        </small>
      </footer>
    </div>
  );
};
export default Footer;
