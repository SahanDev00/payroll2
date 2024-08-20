import pic1 from '../../images/payrol5.PNG'

const HRIS = () => {
  return (
    <div id='HRIS' className='w-full flex items-center justify-center mt-10'>
      <div className='w-[60%] mx-auto'>
        <h1 className='text-4xl text-blue font-bold'>5. Online Portal (emPower HRIS Online)</h1>
        <p className='text-black/80 mt-4 text-lg font-semibold text-wrap'>emPower HRIS Online is an additional web-based module which is very helpful to your employees to 
          interact with the HR system. Your employees can log in to the portal from anywhere using their favorite web 
          browsers to emPower HRIS. There employees can check various kind of details and can perform some HR 
          Related actions as well.
        </p>
        <img className="w-full mt-5" src={pic1} alt="" />
          <div className='w-full mt-10'>
            <div className="grid grid-cols-2 w-full gap-10">
              <div>
                  <h2 className='text-xl font-semibold text-blue/90'>5.1. Features</h2>
                  <ul className="ml-10">
                      <li className='text-wrap text-black/70 mt-1 text-lg font-semibold'>• Check my profile and detailss</li>
                      <li className='text-wrap text-black/70 mt-1 text-lg font-semibold'>• Check my leave summary & apply leave requests</li>
                      <li className='text-wrap text-black/70 mt-1 text-lg font-semibold'>• Browse other people profiles</li>
                      <li className='text-wrap text-black/70 mt-1 text-lg font-semibold'>• Approve your juniors’ requests                      </li>
                      <li className='text-wrap text-black/70 mt-1 text-lg font-semibold'>• Get valuable HR Notifications</li>
                  </ul>
              </div>
              <div>
                  <h2 className='text-xl font-semibold text-blue/90'>5.2. Approval & Reporting</h2>
                  <ul className="ml-10">
                      <li className='text-wrap text-black/70 mt-1 text-lg font-semibold'>• Approve Leave Requests</li>
                      <li className='text-wrap text-black/70 mt-1 text-lg font-semibold'>• Approve Attendance Change Requests</li>
                      <li className='text-wrap text-black/70 mt-1 text-lg font-semibold'>• HR Details Change Requests</li>
                  </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default HRIS