

const TimeAttendance = () => {
  return (
    <div id='TimeAttendance' className='w-full flex items-center justify-center mt-10'>
      <div className='w-[60%] mx-auto'>
        <h1 className='text-4xl text-blue font-bold'>2. Time & Attendance Module</h1>
        <p className='text-black/80 mt-4 text-lg font-semibold text-wrap'>This module can save your administrative time by 90% when calculating time and attendance of 
                employees. It is really helpful when your employees are working with different shifts and under 
                different overtime rates. emPower Payroll & HR has the capability to read your biometric device 
                fingerprint records and process them according to the shifts and rosters you have defined.</p>
          <div className='w-full mt-8'>
            <h2 className='text-xl font-semibold text-blue/90'>2.1. Employee Group Management</h2>
            <p className='text-wrap text-black/70 mt-3 text-lg font-semibold'>Group management will allow you to create employee groups who works together in the same 
            shifts. So you can easily manage their records with time & attendance.</p>
          </div>
          <div className='w-full mt-10'>
            <h2 className='text-xl font-semibold text-blue/90'>2.2. Advance Shift Types</h2>
            <p className='text-wrap text-black/70 mt-3 text-lg font-semibold'>You can define your own shifts based on the actual working time of your employees. There you can 
                define start time and end time with a grace period, half day time, overtime start times and end times up
                to 3 overtime type, lunch/break time and different other parameters to capture any complex shift.</p>
          </div>
          <div className='w-full mt-10'>
            <h2 className='text-xl font-semibold text-blue/90'>2.3. Shift Roster Management</h2>
            <p className='text-wrap text-black/70 mt-3 text-lg font-semibold'>Shift roster is the calendar of the shifts and employee groups. There you can arrange the employee 
                groups assigned to shifts based on the requirement. You can add the shift roster in a repeated way with 
                different repeat patterns.
                </p>
          </div>
          <div className='w-full mt-10'>
            <h2 className='text-xl font-semibold text-blue/90'>2.4. emPower ActiveSync</h2>
            <p className='text-wrap text-black/70 mt-3 text-lg font-semibold'>This is an add-on tool which will read biometric details and update the time and attendance records to 
                the emPower Payroll & HR. It can be installed in another computer which can reach all your biometric 
                devices through the network or using internet. emPower ActiveSync tool is versatile to transfer biometric 
                records from any other branch in the world to head office main system in order to calculate the 
                attendance of your employees.
            </p>
          </div>
      </div>
    </div>
  )
}

export default TimeAttendance