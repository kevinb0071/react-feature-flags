import LightDarkMode from "./components/dark-mode";
import "./App.css";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import GithubProfileFinder from "./components/github-profile-finder";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import RandomColor from "./components/random-color";
import SearchAutocomplete from "./components/search-autocomplete-with-api";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/* ScrollIndicator */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      {/* LightDarkMode Component */}
      <LightDarkMode />
      {/* Custom Tabs Component */}
      <TabTest />
      {/* Tree View Component */}
      <TreeView menus={menus} />
      {/* Custom Modal Popup Component */}
      <ModalTest />
      {/*SearchAutocomplete */}
      <SearchAutocomplete />
      {/* ImageSlider Comonent */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={4} />
      {/* LoadMoreData Comonent */}
      <LoadMoreData />
      {/* QRCodeGenerator */}
      <QRCodeGenerator />
      {/* GithubProfileFinder */}
      <GithubProfileFinder />
      {/* RandomColor */}
      <RandomColor />
      {/* TicTacToe */}
      <TicTacToe />
      {/* Star Rating Component */}
      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;
