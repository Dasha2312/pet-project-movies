import MediaBlock from "../MediaBlock/MediaBlock";

function SlideItem({slide, imagePosterSizes, imagesBaseUrl, type, openLogInModal, addToWatchLater, isAddedToWatchLater}) {

  return (
    <MediaBlock media={slide} imagePosterSizes={imagePosterSizes} imagesBaseUrl={imagesBaseUrl} type={type} openLogInModal={openLogInModal} addToWatchLater={addToWatchLater} isAddedToWatchLater={isAddedToWatchLater} />
  );
}

export default SlideItem;