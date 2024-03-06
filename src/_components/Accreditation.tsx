import NABL from "../images/NABL.png";
import ISO from "../images/ISO.jpg";
import CAP from "../images/cap.jpg";

const Accreditation = () => {
  return (
    <div className="w-full sm:w-[95%] p-8 flex flex-col gap-4 bg-white">
      <div className="flex flex-col gap-1 mb-3">
        <p className="text-xl sm:text-2xl font-bold text-center">
          Our Partner&apos;s{" "}
          <span className="text-[#22577a]">Accreditation</span>
        </p>
        <div className="h-1 w-[30%] sm:w-[10%] self-center rounded-sm bg-[#22577a]" />
      </div>

      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 justify-items-center">
        <img src={CAP} alt="" width={200} height={100} />
        <img src={ISO} alt="" width={1070} height={670} />
        <img
          src={NABL}
          alt=""
          className="col-span-2 sm:col-span-1"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Accreditation;
