import React from 'react'
import ZohoCRMForm from './ZohoCRMForm'

const ContactUs = () => {
    return (
        <>
            <div id="requestDemoSection" className='
            max-w-7xl mx-auto' >
                <h1 className=' text-[33px] font-[900] mb-[40px] text-center '>Request Demo</h1>
                <div>
                    {/* <iframe
                        title="iframe-contact"
                        width="3000"
                        height="300"
                        src="https://crm.zoho.com/crm/WebFormServeServlet?rid=9782a1926f1915385d44f182401c0386d62ae7494503a7299775296675b05664dfc1219f15e0ba647bdeca0d4f0e872agid8104cf5d2a707488413e13b053265d7961ca7ee73ba15382449b5afb7acad80a"
                    ></iframe> */}
                    <ZohoCRMForm />
                </div>
            </div>
        </>
    )
}

export default ContactUs