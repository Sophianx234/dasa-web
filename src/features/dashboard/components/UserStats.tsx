function UserStats() {
    return (

   <div>
    <div className=" divide-y-4 mx-10 bg-dasalight shadow">
  <div className="stat place-items-center">
    <div className="stat-title text-[#7f7a74]">Downloads</div>
    <div className="stat-value text-[#33312e]">31K</div>
    <div className="stat-desc text-[#7f7a74]">From January 1st to February 1st</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title text-[#7f7a74]">Users</div>
    <div className="stat-value text-[#33312e]">4,200</div>
    <div className="stat-desc text-red-500">↗︎ 40 (2%)</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title text-[#7f7a74]">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc text-red-500">↘︎ 90 (14%)</div>
  </div>
</div>
   </div>
    )
}

export default UserStats
