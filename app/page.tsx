import Image from "next/image";
import MeImage from "../public/images/me.jpeg";
import { getOuraDailySleep, getOuraSleepPeriods } from "./(components)/oura/api";
import { DailySleepChart } from "./(components)/oura/daily-sleep-chart";
import { SleepPeriodsChart } from "./(components)/oura/sleep-periods-chart";
import styles from "./page.module.scss";

export default async function Page() {
  const ouraDailySleep = await getOuraDailySleep();
  const ouraSleepPeriods = await getOuraSleepPeriods();

  return (
    <>
      <div className="flex flex-col flex-grow gap-10 p-8 py-10 2xl:flex-row lg:p-28">
        <div className="2xl:w-1/2 xl:pr-28">
          <p className="mb-1 text-xl font-light leading-4 tracking-wide xl:text-left lg:mb-1 lg:text-4xl">
            Hi, my name is
          </p>
          <h1 className="relative text-4xl font-extrabold lg:text-7xl w-min whitespace-nowrap">
            <span className="relative z-20">Per Hansen</span>
            <div className="absolute z-10 hidden w-4/5 h-8 bg-blue-100 lg:block -left-2 -bottom-1"></div>
          </h1>
          <p className="mt-6 xl:mt-10 sm:text-xl">
            I&apos;m a frontend developer and full-stack wannabe. I enjoy developing anything web and occasionally
            experiment with Arduino, Unity or really any technology i find interesting.
          </p>
          <p className="mt-2 sm:text-xl">
            Business inquiries at{" "}
            <a href="mailto:hello@perhp.com" target="_blank" rel="noreferrer" className="relative inline-block group">
              <span className="relative z-20 font-medium">hello@perhp.com</span>
              <span className="absolute bottom-0 z-10 block h-2 transition-all bg-blue-100 sm:h-3 -left-1 -right-1 group-hover:h-7"></span>
            </a>
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 596 289"
            fill="none"
            className="pb-3 border-b border-gray-400 mt-14 max-h-24"
          >
            <path
              d="M178 31C169.894 38.6363 163.15 47.2952 156.222 56C141.318 74.7283 126.52 93.5416 111.556 112.222C89.7418 139.454 67.6258 166.439 45 193"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
              className={styles.signature_1}
            />
            <path
              d="M97 183C124.727 173.697 151.242 160.778 176.944 146.889C184.103 143.02 191.142 138.937 198 134.556C202.744 131.524 196.216 133.706 195 134.111C172.785 141.516 154.543 158.68 138.333 174.889C134.36 178.862 131.014 182.302 127.5 186.556C126.572 187.679 124.138 189.926 125.5 190.444C130.808 192.467 145.847 184.159 149.944 182.444C163.025 176.972 175.909 171.076 189.111 165.889C200.228 161.521 212.609 155.769 224.556 153.889C226.207 153.629 224.289 157.435 223.222 158.722C216.149 167.259 208.012 174.924 199.944 182.5C196.039 186.167 191.873 190.671 187.333 193.667C181.76 197.345 196.396 183.816 201.444 179.444C234.46 150.857 273.291 133.09 313 116"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
              className={styles.signature_2}
            />
            <path
              d="M276 151C343.352 114.147 408.058 72.4079 473.444 32.2222C474.423 31.6207 480.602 28.2397 474.722 30.0556C465.756 32.8246 457.083 37.1899 448.889 41.6667C385.421 76.3425 328.997 123.622 273.833 169.889C230.049 206.612 187.354 245.181 139.667 276.889C135.371 279.745 122.484 288.278 126.556 285.111C137.102 276.908 148.414 269.329 159.333 261.667C218.506 220.145 279.58 181.077 342.222 145C372.959 127.298 404.203 110.494 436.111 95C453.18 86.7115 470.971 77.5116 489.167 71.7222C492.252 70.7404 483.361 74.5925 480.444 76C467.344 82.3227 454.516 89.1677 441.889 96.3889C401.966 119.221 364.196 145.504 325.667 170.556C324.926 171.037 307.05 180.523 306 184.111C305.843 184.647 307.116 184.37 307.667 184.278C311.639 183.616 319.774 180.616 322.444 179.667C360.544 166.124 398.39 148.601 438.333 141.111C441.345 140.547 447.447 139.257 442.556 143.333C434.995 149.634 426.329 154.871 418.111 160.222C406.872 167.542 395.506 174.659 384.389 182.167C381.984 183.791 379.564 185.396 377.222 187.111C376.375 187.732 374.914 188.119 374.833 189.167C374.773 189.95 376.379 188.842 377.111 188.556C380.033 187.414 382.883 186.097 385.778 184.889C432.386 165.431 480.661 150.394 530.611 142.389C547.882 139.621 565.396 137.783 582.889 137.222C586.117 137.119 589.91 136.037 592.556 137.889C593.505 138.554 591.144 139.85 591 141"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
              className={styles.signature_3}
            />
            <path
              d="M148 103C183.46 91.4909 217.047 78.4624 249.611 59.8889C265.321 50.9282 282.473 41.2414 294.611 27.5C306.554 13.9802 293.267 8.97045 280.222 6.66667C255.278 2.26157 228.947 2.77726 203.778 4.11112C162.295 6.30949 120.401 12.0929 80.5 23.8889C58.6865 30.3376 36.5766 38.6752 18 52.1111C9.97995 57.9118 5.65766 62.964 3 72"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
              className={styles.signature_4}
            />
          </svg>
          <p className="mt-2 text-sm font-bold ">Per Hansen</p>
          <p className="text-xs">Software Developer</p>
        </div>
        <div className="relative flex justify-center pt-4 2xl:w-1/2">
          <div className="relative max-w-md h-min">
            <div className={styles.blobAnimation}></div>
            <Image
              src={MeImage}
              alt="Image of Per Hansen"
              className="relative z-20"
              style={{ borderRadius: "63% 37% 37% 63% / 43% 37% 63% 57%" }}
            />
          </div>
        </div>
      </div>
      <div className="py-20 pr-4 sm:p-8 lg:px-28 lg:py-28">
        <p className="mb-6 text-base font-semibold tracking-wider text-center text-gray-600 uppercase">
          These are my sleep scores the past month
        </p>
        <div className="border sm:p-5 border-gray-50">
          <DailySleepChart dailySleep={ouraDailySleep} />
          <div className="h-16 "></div>
          <SleepPeriodsChart sleepPeriods={ouraSleepPeriods} />
        </div>
      </div>
    </>
  );
}
