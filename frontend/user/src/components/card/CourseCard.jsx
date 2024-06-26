import { currencyFormatterIDR, dateFormatter } from "@/lib/formatter";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa";
import { IoDiamondSharp, IoGiftSharp } from "react-icons/io5";
import { PiBooks, PiClockFill } from "react-icons/pi";
import { RiShieldStarLine } from "react-icons/ri";

export default function CourseCard({ course }) {
  const { push } = useRouter();
  return (
    <div className="rounded-3xl bg-white shadow-lg ">
      <Image
        src={
          course.imageUrl ||
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        width={320}
        height={80}
        className="object-cover w-full h-32 rounded-t-3xl"
        alt={course.name}
      />
      <div className="p-4">
        <div className="flex justify-between">
          <h1 className="font-bold text-sm text-primary-01">
            {course.category?.name}
          </h1>
          <div className="flex ">
            <FaStar className="text-alert-attention" />
            <p className="text-sm font-semibold ml-1">{course.rating}</p>
          </div>
        </div>
        <h2 className="text-sm truncate font-bold mt-1">{course.name}</h2>
        <div className="text-xs flex justify-between mt-1">
          <p className="">{course.courseBy}</p>

          <p className="text-primary-01 font-semibold text-[0.65rem]">
            {dateFormatter(course.createdAt).split(",")[0]}
          </p>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <RiShieldStarLine className="text-alert-success" />
            <p className="text-[0.65rem] ml-1 font-semibold text-primary-01">
              Level{" "}
              {course.level?.charAt(0).toUpperCase() + course.level.slice(1)}
            </p>
          </div>
          <div className="flex items-center">
            <PiBooks className="text-alert-success" />
            <p className="text-[0.65rem] ml-1">{course.totalModule} Modul</p>
          </div>
          <div className="flex items-center justify-center">
            <PiClockFill className="text-alert-success" />
            <p className="text-[0.65rem] ml-1">{course.totalDuration} Menit</p>
          </div>
        </div>
        <p className="text-[0.65rem] mt-1">
          <span className="text-primary-01 font-semibold">
            {course.totalUser}
          </span>{" "}
          Pengguna mengikuti kursus ini
        </p>
        <button
          onClick={() => {
            push(`/kursus/${course.id}`);
          }}
          className="flex items-center justify-between mt-2 bg-primary-01 hover:bg-primary-04 py-1 px-4 rounded-2xl text-white font-semibold text-xs"
        >
          {course.type === "premium" ? (
            <>
              <IoDiamondSharp className="mr-1 text-base inline-block" />
              <span>{currencyFormatterIDR(course.price)}</span>
            </>
          ) : (
            <p className=" w-20 flex items-center justify-center">
              <span>
                <IoGiftSharp className="mr-1 text-base " />
              </span>
              Gratis
            </p>
          )}
        </button>
      </div>
    </div>
  );
}
