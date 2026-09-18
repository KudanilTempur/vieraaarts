import { Link } from "react-router-dom";

import { artworks } from "../data/artworks";

export default function Gallery() {
    const artworks4x5 = artworks.filter(
        (artwork) => artwork.ratio === "4:5"
    );

    const artworks16x9 = artworks.filter(
        (artwork) => artwork.ratio === "16:9"
    );

    const artworks3x4 = artworks.filter(
        (artwork) => artwork.ratio === "3:4"
    );

    const artworks1x1 = artworks.filter(
        (artwork) => artwork.ratio === "1:1"
    );

    return (
        <main className="min-h-screen bg-[#F2F9FD] pt-[70px] text-[#16377D]">
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-[6%]">

                {/* ========================================
                    GALLERY INTRO
                ======================================== */}
                <section className="pt-10 text-center sm:pt-[68px]">
                    <h1 className="mx-auto max-w-[680px] font-serif text-[24px] font-normal leading-[1.35] sm:text-[34px]">
                        Welcome to my{" "}
                        <span className="font-semibold">gallery!</span> Here's
                        a collection of my recent works.
                    </h1>

                    <p className="mt-8 font-serif text-[20px] italic leading-snug text-[#16377D]/80 sm:mt-[92px] sm:text-[32px]">
                        Let's begin with a 16:9 canvas.
                    </p>
                </section>

                {/* ========================================
                    FEATURED ARTWORK
                ======================================== */}
                <section className="mx-auto mt-10 w-full sm:mt-[72px] sm:w-[100%]">

                    {artworks16x9[0] && (
                        <div className="mx-auto flex aspect-[16/9] max-w-[1180px] items-center justify-center bg-[#E5F3FF]/40">
                            <img
                                src={artworks16x9[0].image}
                                alt={artworks16x9[0].title}
                                className="h-full w-full object-contain"
                            />
                        </div>
                    )}
                </section>

                {/* ========================================
                    ARTWORK COLLAGE
                ======================================== */}
                <section className="mx-auto mt-3 max-w-[1170px] sm:mt-[25px]">
                    {/* Menggunakan items-stretch agar tinggi kolom kiri dan kanan sejajar */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[30%_70%] items-stretch">

                        {/* Kolom Kiri: 2 Artwork kecil */}
                        <div className="flex flex-col gap-3">
                            {artworks4x5[0] && (
                                <div className="flex flex-1 w-full aspect-[4/5] sm:aspect-auto items-center justify-center bg-[#E5F3FF]/40">
                                    <img
                                        src={artworks4x5[0].image}
                                        alt={artworks4x5[0].title}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            )}

                            {artworks4x5[2] && (
                                <div className="flex flex-1 w-full aspect-[4/5] sm:aspect-auto items-center justify-center bg-[#E5F3FF]/40">
                                    <img
                                        src={artworks4x5[2].image}
                                        alt={artworks4x5[2].title}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Kolom Kanan: 1 Artwork besar */}
                        {artworks4x5[1] && (
                            <div className="flex w-full items-center justify-center bg-[#E5F3FF]/40 aspect-[5/4]">
                                <img
                                    src={artworks4x5[1].image}
                                    alt={artworks4x5[1].title}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        )}

                    </div>
                </section>

                {/* ========================================
                    LARGE ARTWORK
                ======================================== */}
                <section className="mx-auto mt-3 max-w-[1180px]">
                    {artworks16x9[1] && (
                        <div className="flex aspect-[16/9] w-full items-center justify-center bg-[#E5F3FF]/40">
                            <img
                                src={artworks16x9[1].image}
                                alt={artworks16x9[1].title}
                                className="h-full w-full object-contain"
                            />
                        </div>
                    )}
                </section>

                {/* ========================================
                    PORTRAIT ARTWORKS (3:4)
                ======================================== */}
                <section className="mx-auto mt-3 max-w-[1180px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {artworks3x4.map((artwork) => (
                            <div
                                key={artwork.id}
                                className="flex aspect-[3/4] w-full items-center justify-center bg-[#E5F3FF]/40"
                            >
                                <img
                                    src={artwork.image}
                                    alt={artwork.title}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* ========================================
                    ARTIST STATEMENT
                    Menggantikan placeholder abu-abu dari Figma
                    dengan jeda bersuara — ganti kutipan di bawah
                    dengan pernyataan/bio singkat kamu sendiri.
                ======================================== */}


                {/* ========================================
                    SQUARE ARTWORKS (1:1)
                ======================================== */}
                <section className="mx-auto mt-10 max-w-[1180px] sm:mt-[70px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {artworks1x1.map((artwork) => (
                            <div
                                key={artwork.id}
                                className="flex aspect-square w-full items-center justify-center bg-[#E5F3FF]/40"
                            >
                                <img
                                    src={artwork.image}
                                    alt={artwork.title}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* ========================================
                    MORE ARTWORKS
                ======================================== */}
                <section className="mx-auto mt-10 max-w-[1180px] sm:mt-[70px]">
                    <h2 className="text-center text-[14px] font-normal text-[#16377D]/70 sm:text-[15px]">
                        The artworks I've drawn so far.
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-[25px] sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                        {artworks4x5.slice(1).map((artwork) => (
                            <div
                                key={artwork.id}
                                className="group relative flex aspect-[5/4] w-full items-center justify-center bg-[#E5F3FF]/40"
                            >
                                <img
                                    src={artwork.image}
                                    alt={artwork.title}
                                    className="h-full w-full object-contain motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.04]"
                                />
                                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-[#16377D]/50 via-transparent to-transparent opacity-0 transition-opacity motion-safe:transition-transform duration-500 motion-safe:group-hover:scale-[1.04] group-hover:opacity-100">
                                    <span className="p-3 text-[12px] text-white sm:p-4 sm:text-[13px]">
                                        {artwork.title}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ========================================
                    FOOTER
                ======================================== */}
                <section className="mx-auto mt-14 max-w-[1180px] pb-16 sm:mt-[96px] sm:pb-[80px]">
                    <div className="mx-auto h-px w-full max-w-[1180px] bg-[#A9D4FF]/50" />

                    <div className="mx-auto mt-10 max-w-[500px] text-center sm:mt-[56px] sm:text-left">
                        <h3 className="text-[15px] font-bold">
                            Want to see more of my artworks?
                        </h3>

                        <p className="mt-[10px] text-[13px] leading-[1.6] text-[#16377D]/80">
                            You can find more of my artworks and illustrations
                            through my social media.
                        </p>

                        <p className="mt-[14px] text-[13px] text-[#16377D]/80">
                            Thank you for visiting my gallery!
                        </p>

                        <div className="mt-[40px] flex justify-center sm:mt-[55px]">
                            <Link
                                to="/commission"
                                className="flex h-[52px] items-center gap-[12px] rounded-full border border-[#A9D4FF] px-[28px] text-[18px] sm:text-[20px] text-[#16377D] transition hover:bg-[#E5F3FF]"
                            >
                                commission me

                                <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-[#16377D] text-[13px] font-bold">
                                    <img
                                        src="/webdesign/arrow_circle_right.png"
                                        alt="Next artwork"
                                        className="h-[40px] w-[40px] object-contain"
                                    />
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}