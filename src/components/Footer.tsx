function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p className="m-0">
        © {new Date().getFullYear()} <span className="text-warning">Shiwansh Intern</span>.  
        Built with ❤️ using React + Bootstrap
      </p>
    </footer>
  );
}

export default Footer;
