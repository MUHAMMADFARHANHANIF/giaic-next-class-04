import React from 'react'
import Card from './components/Card'

const page = () => {
  return (
    < >
    <div>
      <h1 className='text-center p-5 bg-yellow-400 text-5xl'>All Students Cards </h1>
    </div>
    <div className='flex justify-evenly flex-wrap w-full h-full'>

    <Card name="farhan" day="sunday" likes='89' class="2 to 5" rollnumber="3892739"  />
    <Card name="jawad" day="friday" likes='23' class="2 to 5" rollnumber="3892739"  />
    <Card name="kamran" day="monday" likes='67' class="2 to 5" rollnumber="3892739"  />
    <Card name="haseeb" day="sunday" likes='89' class="2 to 5" rollnumber="3892739"  />
    <Card name="farooq" day="monday" likes='64' class="2 to 5" rollnumber="3892739"  />
    <Card name="khawar" day="tuesday" likes='43' class="2 to 5" rollnumber="3892739"  />
    <Card name="abdullah" day="monday" likes='89' class="2 to 5" rollnumber="3892739"  />
    <Card name="asharib" day="wednesday" likes='78' class="2 to 5" rollnumber="3892739"  />
    <Card name="raheem" day="sunday" likes='69' class="9 to 11" rollnumber="3865739"  />
    </div>
    </>

  )
}

export default page