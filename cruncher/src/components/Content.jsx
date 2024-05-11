import Bmi from './Bmi.jsx';
import Bodyfat from './Bodyfat.jsx';
import Idealweight from './Idealweight.jsx';
import Macros from './Macros.jsx';

const Content = ({id}) => {
    switch (id) {
        case 1:
          return <Macros />;
        case 2:
          return <Bmi />;
        case 3:
          return <Bodyfat />;
        case 4:
          return <Idealweight />;
        default:
          return <Macros />; // Render Macros if id doesn't match any case
  }
}

export default Content;