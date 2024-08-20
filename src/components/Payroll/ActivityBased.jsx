import pic1 from '../../images/payroll4.PNG'

const ActivityBased = () => {
    return (
      <div id='ActivityBased' className='w-full flex items-center justify-center mt-10'>
        <div className='w-[60%] mx-auto'>
          <h1 className='text-4xl text-blue font-bold'>3. Activity Based Payroll</h1>
          <p className='text-black/80 mt-4 text-lg font-semibold text-wrap'>Activity based payroll is used when your employees are subject to get the salaries based on the 
                actual work/activities they perform. E.g.: you give a salary for an employee based on plucked 
                plantations. This module is suitable for tea estates and other estate management companies.
                </p>
            <div className='w-full mt-8'>
              <h2 className='text-xl font-semibold text-blue/90'>3.1. Custom Activity Types</h2>
              <p className='text-wrap text-black/70 mt-3 text-lg font-semibold'>You can create custom activity types based on your requirement. The basis and the rate can be 
                    given to any activity you create. Also, you can group same kind of activities so it will help you to 
                    manage them easily.</p>
            </div>
            <div className='w-full mt-10'>
              <h2 className='text-xl font-semibold text-blue/90'>3.2. Employee Gangs and Fields</h2>
              <p className='text-wrap text-black/70 mt-3 text-lg font-semibold'>You can organize your employees into different gangs based on the activities they perform. So you know 
                who are working together and which gang they are belong to. Also, you can group your employees 
                based on the locations/fields you have. So you know who are working on each fields you have</p>
            </div>
            <div className='w-full mt-10'>
              <h2 className='text-xl font-semibold text-blue/90'>3.3. Activity Budgeting</h2>
              <p className='text-wrap text-black/70 mt-3 text-lg font-semibold'>You can enter a budget for a period and monitor the actual performance of the activities. Budgeting is 
              helpful to generated budget comparison reports and etc
                  </p>
            </div>
            <div className='w-full mt-10'>
              <h2 className='text-xl font-semibold text-blue/90'>3.4. Daily Activity Records</h2>
              <img className='w-full mt-5' src={pic1} alt="" />
              <p className='text-wrap text-black/70 mt-5 text-lg font-semibold'>This function helps you enter the daily performed activities for each employee. At the end of the period, 
                    employees will get the total amounts as the salaries.
              </p>
            </div>
        </div>
      </div>
    )
  }
  
  export default ActivityBased