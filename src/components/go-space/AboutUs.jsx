import React from 'react';
import { FaQuoteLeft, FaStarOfLife } from 'react-icons/fa';
import clsx from 'clsx';
import { BgMainGradient } from '@/utils/ReueseClass';

export const AboutUs = () => {
  return (
    <section className="mx-7 my-15 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {/* Kolom kiri */}
      <div className="flex flex-col gap-4">
        <FaQuoteLeft className="text-2xl opacity-50" />
        <p className="text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>

        {/* Gambar */}
        <div
          className={clsx(
            'rounded-2xl bg-cover bg-center w-full',
            'h-40 sm:h-48 md:h-56'
          )}
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg")',
          }}
        />
      </div>

      {/* Kolom kanan */}
      <div
        className={clsx(
          BgMainGradient,
          'text-white p-6 sm:p-8 rounded-2xl flex flex-col gap-4'
        )}
      >
        <p className="flex items-center justify-end gap-2 font-bold text-lg sm:text-xl">
          GO SPACE <FaStarOfLife className="text-yellow-300" />
        </p>

        <p className="text-sm sm:text-base leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </p>
      </div>
    </section>
  );
};