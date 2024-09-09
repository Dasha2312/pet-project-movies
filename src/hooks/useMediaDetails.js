import { useQuery } from "@tanstack/react-query";
import { mediaDetails } from "../services/MediaDetails";

function useMediaDetails(mediaId) {
  const {isPending: isPendingMediaInfo, data: mediaInfo, isError: isErrorMediaInfo} = useQuery({
    queryKey: ['mediaInfo', mediaId],
    queryFn: () => mediaDetails(mediaId),
    // enabled: !!mediaId,
    refetchOnWindowFocus: false
  })

  return {isPendingMediaInfo, mediaInfo, isErrorMediaInfo}
}

export default useMediaDetails;