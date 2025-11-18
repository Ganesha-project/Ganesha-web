import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const Pagination = ({ currentPage, totalPages, onPageChange, loading = false }) => {
  // Jangan tampilkan pagination jika hanya ada 1 halaman
  if (totalPages <= 1) {
    return null;
  }

  // Fungsi untuk generate nomor halaman yang akan ditampilkan
  const getPageNumbers = () => {
    const pages = [];
    const showPages = 5; // Jumlah maksimal nomor halaman yang ditampilkan
    
    if (totalPages <= showPages) {
      // Jika total halaman <= 5, tampilkan semua
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Logika untuk menampilkan halaman dengan ellipsis
      if (currentPage <= 3) {
        // Di awal
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Di akhir
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Di tengah
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center pt-10 gap-4">
      <div className="flex items-center gap-2">
        {/* Tombol Previous */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1 || loading}
          className="flex items-center justify-center w-10 h-10 bg-mainColor/20 dark:bg-baseColor/30 text-mainColor dark:text-baseColor hover:bg-mainColor/30 dark:hover:bg-baseColor/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-full"
          aria-label="Previous page"
        >
          <FaChevronLeft className="text-sm" />
        </button>

        {/* Nomor Halaman */}
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="flex items-center justify-center w-10 h-10 text-gray-500 dark:text-gray-400"
              >
                ...
              </span>
            );
          }

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              disabled={loading}
              className={`flex items-center justify-center w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                currentPage === page
                  ? 'bg-mainColor dark:bg-baseColor text-white'
                  : 'bg-mainColor/20 dark:bg-baseColor/30 text-mainColor dark:text-baseColor hover:bg-mainColor/30 dark:hover:bg-baseColor/40'
              } disabled:cursor-not-allowed`}
            >
              {page}
            </button>
          );
        })}

        {/* Tombol Next */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || loading}
          className="flex items-center justify-center w-10 h-10 bg-mainColor/20 dark:bg-baseColor/30 text-mainColor dark:text-baseColor hover:bg-mainColor/30 dark:hover:bg-baseColor/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-full"
          aria-label="Next page"
        >
          <FaChevronRight className="text-sm" />
        </button>
      </div>

      {/* Info Halaman */}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Halaman {currentPage} dari {totalPages}
      </p>
    </div>
  );
};