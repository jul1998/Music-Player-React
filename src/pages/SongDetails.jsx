import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {DetailsHeader, Error, Loader, RelatedSongs} from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";

const SongDetails = () => {
    const dispatch = useDispatch();
    const {songid} = useParams();
    const {activeSong, isPlaying} = useSelector((state) => state.player);

    console.log(songid)

    return(
        <div>

        </div>
        )

}


export default SongDetails;
