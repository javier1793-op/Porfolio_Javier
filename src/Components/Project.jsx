import '../Scss/project.scss'
import Cardproject from './Cardproject';

const Project = () => {
    return (
        <>
          <div className="titleAbout">
            <h1>My projects</h1>
          </div>
          <div className="contentProject">
            <Cardproject/>
            <Cardproject/>
            <Cardproject/>
            <Cardproject/>
            <Cardproject/>
            <Cardproject/>
          </div>
        </>
      );
    };

export default Project