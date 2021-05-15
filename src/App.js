import classNames from 'classnames';
import Styles from './App.module.scss';
import Header from './header/Header';
import Recommended from './recommended/Recommended';
import Sidebar from './sidebar/Sidebar';


function App() {
  return (
    //BEM class naming conversion
    <div className={Styles.main}>
      {/* Header */}
      <Header/>
        <div className={Styles.pageLayout}>
            <div className={Styles.left}>
                <Sidebar/>
            </div>
            <div className={Styles.right}>
                <Recommended/>
            </div>
        </div>
      {/* RecommendVideos */}
    </div>
  );
}

export default App;
