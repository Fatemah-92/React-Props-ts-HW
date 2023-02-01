import React from 'react'

interface MoviesInfo {
    name?: string,
    img: string,
    showDate?: string,
    review?: number,
    isAvailable?: boolean
}
const moviesList: MoviesInfo[] =[
  {
    name: 'The Lion King',
    img: 'https://ih1.redbubble.net/image.2932564116.4865/raf,750x1000,075,t,000000:44f0b734a5.jpg',
    showDate: '12-03-2023',
    review: 9.4,
    isAvailable: true
  },
  {
    name: 'Pocahontas',
    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fsearch%3Fq%3Dpocahontas&psig=AOvVaw0kYx4Cz-rn8rjog4MFc2Pp&ust=1675279737983000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCICKy9zF8vwCFQAAAAAdAAAAABAQ',
    showDate: '12-03-2023',
    review: 9.8,
    isAvailable: true
  },
  {
    name: 'Mulan',
    img: 'https://m.media-amazon.com/images/M/MV5BNDM5NzI0MDA5NV5BMl5BanBnXkFtZTYwMzA3NDY2._V1_.jpg',
    showDate: '12-03-2023',
    review: 9.6,
    isAvailable: true
  },
  {
    name: 'Aladdin',
    img: 'https://c8.alamy.com/zooms/9/d1157fce4c0a4b149f02f942cd1eba9c/gj2593.jpg',
    showDate: '12-03-2023',
    review: 9.2,
    isAvailable: true
  },
  {
    name: 'Snow White',
    img: 'https://cdn.britannica.com/38/59638-004-BC0E8CCB/Snow-White-and-the-Seven-Dwarfs.jpg',
    showDate: '12-03-2023',
    review: 9.4,
    isAvailable: false
  }
]
function Movies(moviesList: MoviesInfo) {
  return (
    <ul className='container'>
            <div className='movie'>
            {moviesList.map(({name, img, showDate, review, isAvailable}: MoviesInfo) => {
              <li>
                if({isAvailable}) {
                  <div key={img}>{img}</div>
                }else { 'Coming Soon' }         
              </li>     
              })}
            </div>  
    </ul>
  )
}

export default Movies