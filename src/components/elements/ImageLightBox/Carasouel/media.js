import Media1 from '../../../../assets/images/common/cat.jpg';
import Media2 from '../../../../assets/images/common/cat.jpg';
import Media3 from '../../../../assets/images/common/cat.jpg';
import Media4 from '../../../../assets/images/common/cat.jpg';
import Media5 from '../../../../assets/images/common/cat.jpg';

export const media = [
  Media1,
  Media2,
  Media3,
  Media4,
  Media5,
  Media1,
  Media1,
  Media1,
  Media1,
  Media1,
];
export const mediaByIndex = index => media[index % media.length];
// 1 media[1 % 5]
