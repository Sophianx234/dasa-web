import RadialProgress from "./RadialProgress";

function UserAccountCard() {
  return (
    <div className="flex border items-center justify-center mt-4 shadow-md py-4 px-3 rounded-md mx-2">
      <div>
        <h1 className="font-bold font-Montserrat"> only need 20% more!</h1>
        <p className="font-poppins text-sm">
          Complete your data, and get access to exclusive DaSA events.
        </p>
      </div>
      <div>
        <RadialProgress />
      </div>
    </div>
  );
}

export default UserAccountCard;
