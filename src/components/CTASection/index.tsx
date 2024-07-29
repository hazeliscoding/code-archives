import {
  CTA_DESCRIPTION,
  CTA_TITLE_1,
  CTA_TITLE_2,
  CTA_BUTTON,
} from '../../constants/ctaSection';

export function CTASection() {
  return (
    <div className='flex flex-col mx-16 items-center mt-[120px] gap-6'>
      <h2 className='font-bold text-2xl text-center text-slate-600'>
        {CTA_TITLE_1}
        <span className='text-theme px-1'>{CTA_TITLE_2}</span>
      </h2>
      <p className='text-center text-sm w-[450px] max-sm:w-full text-slate-500'>
        {CTA_DESCRIPTION}
      </p>
      <button
        className={`max-sm:w-full bg-theme p-[8px] px-6 text-sm text-white rounded-md hover:bg-white hover:text-theme hover:border hover:border-theme transition duration-200`}
        type='button'
      >
        {CTA_BUTTON}
      </button>
    </div>
  );
}
