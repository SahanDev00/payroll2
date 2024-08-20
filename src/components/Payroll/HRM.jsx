import React from 'react'
import pic1 from '../../images/payroll1.PNG'
import pic2 from '../../images/payroll2.PNG'
import pic3 from '../../images/payroll3.PNG'

const HRM = () => {
  return (
    <div id='HRM' className='w-full flex items-center justify-center mt-10'>
      <div className='w-[60%] mx-auto'>
        <h1 className='text-4xl text-blue font-bold'>1. Payroll & HR Module</h1>
        <p className='text-black/80 mt-4 text-lg font-semibold text-wrap'>Payroll and HR are two different system modules that have integrated always in order to 
            maintain the integrity of the payroll module. Most of the payroll functions are based on the 
            HR module, therefore HR module becomes the base module in EmPower Payroll & HR.</p>
          <div className='w-full mt-5'>
            <h2 className='text-xl font-semibold text-blue/90'>1.1. Complete Employees Management</h2>
            <img className='w-full mt-5' src={pic1} alt="" />
            <p className='text-wrap text-black/70 mt-5 text-lg font-semibold'>emPower Payroll & HR has the best Employee Management tool, Employee Browser which will be a 
                google for your employees. Searching for any employee is very fast and effective. You can search any 
                employee in the system by any part of the information which you know. Employee Management has the 
                ability of categorizing your employees in to several categories based on world standard employee 
                categories.</p>
          </div>
          <div className='w-full mt-10'>
            <h2 className='text-xl font-semibold text-blue/90'>1.2. Custom Earnings & Deductions</h2>
            <img className='w-full mt-5' src={pic2} alt="" />
            <p className='text-wrap text-black/70 mt-5 text-lg font-semibold'>This payroll module is fully parameterized, that means you can maintain your own payroll transaction 
                types (Earnings and Deductions) to match your organization needs. Custom Earnings and Deductions 
                allows you to define the Earning Types and Deduction Types based on your requirement. There are 
                several parameters you can choose when you create earnings or deductions for payroll calculations such 
                as EPF/ETF entitlement, Taxable or non-taxable, Budgetary, Includes to Overtime Calculations, Includes to 
                No-Pay calculations and etc. Also, you can arrange the sort order of the types you have created, so that 
                will change sort order in repots such as pay slips, pay sheet and etc. accordingly</p>
          </div>
          <div className='w-full mt-10'>
            <h2 className='text-xl font-semibold text-blue/90'>1.3. Salary Transactions</h2>
            <img className='w-full mt-5' src={pic3} alt="" />
            <p className='text-wrap text-black/70 mt-5 text-lg font-semibold'>Salary transactions function enables to enter figures for any employee for any created custom earnings 
            or deductions as recurring (Fixed) transition or non-recurring (Variant) transaction.</p>
          </div>
      </div>
    </div>
  )
}

export default HRM