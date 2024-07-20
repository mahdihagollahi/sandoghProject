import React from 'react'
import ReactPaginate from 'react-paginate';
import Image from 'next/image';
import chevronRightImage from '@/app/assent/Img/adminPanel/chevronRightImage.svg'
import chevronLeftImage from '@/app/assent/Img/adminPanel/chevron-left.svg'


function Paginate({pageClick , currentPageData ,pageCount }) {


    const PersianDigit = (num) => {
        const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
        return num.toString().replace(/\d/g, (digit) => persianDigits[digit]);
      };

      
  return (
    <div>
        <ReactPaginate
        previousLabel={
            <div className='flex items-center justify-center w-8 h-8 '>
              <Image src={chevronRightImage} width={48} height={48} alt='chevronRightImage'/>
            </div>
        }

        nextLabel={
            <div className='flex items-center justify-center w-8 h-8 '>
              <Image src={chevronLeftImage} width={48} height={48} alt='chevronRightImage'/>
            </div>
        }

        breakLabel={PersianDigit('...')}

        pageCount={pageCount}

        marginPagesDisplayed={3}

        pageRangeDisplayed={5}

        onPageChange={pageClick}

        containerClassName={'flex justify-center mt-4'}
        
        pageClassName={'mx-1'}

        previousLinkClassName={'px-3 py-1 !border-none !outline-none hover:border-none focus:!border-none '}
        
        nextClassName={'mx-1'}

        nextLinkClassName={'px-3 py-1 !border-none !outline-none hover:!border-none focus:!border-none rounded'}
        
        breakClassName={'mx-1'}
         
        breakLinkClassName={'px-3 py-1 !border-none !outline-none hover:!border-none focus:!border-none rounded'}
        

        activeClassName={' text-white'}

        
        />
    </div>
  )
}

export default Paginate