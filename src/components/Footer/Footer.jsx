const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo do c */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl font-bold text-white">GREEN WATT</h1>
          <p className="text-sm">© 2024 GREEN WATT. Todos os direitos reservados.</p>
        </div>

        {/* Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="/sobre" className="hover:text-white transition duration-300">
            Sobre
          </a>
          <a href="/contato" className="hover:text-white transition duration-300">
            Contato
          </a>
        </div>

        {/* Redes sociais */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            className="text-gray-300 hover:text-blue-500 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4" 
              style={{ width: '16px', height: '16px' }} 
            >
              <path d="M22.675 0H1.325C.594 0 0 .593 0 1.324v21.352C0 23.406.593 24 1.325 24H12.82V14.706H9.692v-3.59h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.465.098 2.795.142v3.243h-1.917c-1.504 0-1.795.714-1.795 1.763v2.313h3.587l-.467 3.59h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.324C24 .593 23.406 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-300 hover:text-blue-400 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4" 
              style={{ width: '16px', height: '16px' }} 
            >
              <path d="M24 4.557a9.943 9.943 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3a9.864 9.864 0 0 1-3.127 1.195A4.917 4.917 0 0 0 16.616 2c-2.717 0-4.916 2.199-4.916 4.917 0 .385.044.761.127 1.124A13.953 13.953 0 0 1 1.64 3.162a4.921 4.921 0 0 0-.664 2.473c0 1.706.869 3.212 2.19 4.096a4.903 4.903 0 0 1-2.228-.616v.062c0 2.382 1.693 4.368 3.946 4.819a4.903 4.903 0 0 1-2.224.084 4.918 4.918 0 0 0 4.59 3.41A9.864 9.864 0 0 1 .984 19.794a13.936 13.936 0 0 0 7.548 2.212c9.054 0 14.001-7.502 14.001-14.002 0-.213-.005-.426-.014-.637A10.012 10.012 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-300 hover:text-pink-400 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4" 
              style={{ width: '16px', height: '16px' }} 
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.349 3.608 1.324.975.975 1.261 2.242 1.323 3.608.059 1.265.071 1.645.071 4.849s-.012 3.584-.071 4.849c-.062 1.366-.348 2.633-1.323 3.608-.975.975-2.242 1.261-3.608 1.323-1.265.059-1.645.071-4.849.071s-3.584-.012-4.849-.071c-1.366-.062-2.633-.348-3.608-1.323-.975-.975-1.261-2.242-1.323-3.608-.059-1.265-.071-1.645-.071-4.849s.012-3.584.071-4.849c.062-1.366.348-2.633 1.323-3.608C4.518 2.512 5.785 2.226 7.151 2.164 8.416 2.103 8.796 2.091 12 2.091zM12 0C8.741 0 8.332.013 7.052.072 5.77.131 4.676.355 3.732 1.3 2.788 2.243 2.564 3.337 2.505 4.619.013 8.332 0 8.741 0 12s.013 3.668.072 4.948c.06 1.282.284 2.376 1.23 3.32.945.945 2.039 1.169 3.32 1.229C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.06 2.376-.284 3.32-1.229.945-.945 1.169-2.039 1.229-3.32.059-1.28.072-1.688.072-4.948s-.013-3.668-.072-4.948c-.06-1.282-.284-2.376-1.229-3.32-.945-.945-2.039-1.169-3.32-1.229C15.668.013 15.259 0 12 0z" />
              <path d="M12 5.838a6.162 6.162 0 1 0 6.163 6.162A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 0 1.44-1.44 1.441 1.441 0 0 0-1.44 1.44z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
