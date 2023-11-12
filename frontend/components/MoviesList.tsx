import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';
import DeleteBtn from './DeleteBtn';

const MoviesList = () => {
    return (
        <>
            <div className='moviesList'>
                <div className='movieContent'>
                    <h2 className="movieText">Movie Title</h2>
                    <div className='movieDescription'>Description</div>
                </div>

                <div className="movieBtns">
                    <DeleteBtn />
                    <Link className='linkBtn' href={'/editMovie/id'}>
                        <HiPencilAlt size={20} />
                    </Link>
                </div>
            </div>

        </>

    );
};

export default MoviesList;
