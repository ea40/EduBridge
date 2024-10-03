import React from 'react'

function Contacts() {
  return (
    <div className="w-full h-[426px] px-16 py-28 bg-white flex-col justify-start items-start gap-20 inline-flex">
    <div className="self-stretch h-[202px] flex-col justify-start items-start gap-16 flex">
        <div className="self-stretch justify-start items-center gap-12 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                <div className="w-12 h-12 relative" />
                <div className="self-stretch h-[130px] flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch h-[82px] flex-col justify-start items-start gap-4 flex">
                        <div className="self-stretch text-black text-[32px] font-bold font-['Roboto'] leading-[41.60px]">Contact</div>
                        <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">We're here to assist you with any questions or support.</div>
                    </div>
                    <div className="self-stretch text-black text-base font-normal font-['Roboto'] underline leading-normal">support@relume.io</div>
                </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                <div className="w-12 h-12 relative" />
                <div className="self-stretch h-[130px] flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch h-[82px] flex-col justify-start items-start gap-4 flex">
                        <div className="self-stretch text-black text-[32px] font-bold font-['Roboto'] leading-[41.60px]">Phone</div>
                        <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">Reach out to us for immediate assistance.</div>
                    </div>
                    <div className="self-stretch text-black text-base font-normal font-['Roboto'] underline leading-normal">+1 (555) 123-4567</div>
                </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                <div className="w-12 h-12 relative" />
                <div className="self-stretch h-[130px] flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch h-[82px] flex-col justify-start items-start gap-4 flex">
                        <div className="self-stretch text-black text-[32px] font-bold font-['Roboto'] leading-[41.60px]">Office</div>
                        <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">Visit us for in-person support and resources.</div>
                    </div>
                    <div className="self-stretch text-black text-base font-normal font-['Roboto'] underline leading-normal">456 Example Ave, Melbourne VIC 3000 AU</div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Contacts