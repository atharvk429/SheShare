import {Link} from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";

export default function Header() {
  const {user} = useContext(UserContext);
    return (
        <header className='flex justify-between'>
          <Link to={'/'} className="flex items-center gap-1">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            className='w-8 h-8' viewBox="0 0 400 400" enableBackground="new 0 0 500 500" xmlSpace="preserve">
            <path fill="#FBF6F0" opacity="1.000000" stroke="none" 
              d="
            M179.428284,336.816040 
              C170.246841,327.686310 171.060013,320.916595 181.585739,313.779449 
              C196.767715,303.485107 213.812027,297.214142 230.881439,291.134277 
              C241.121796,287.486786 251.717056,284.792877 262.236359,281.983215 
              C273.247589,279.042145 276.629883,265.758240 268.124664,258.032135 
              C261.905243,252.382446 254.370117,247.762680 246.716492,244.197037 
              C230.608963,236.692947 213.855896,230.577972 197.721008,223.127899 
              C186.828827,218.098587 175.744583,212.840576 166.159958,205.768845 
              C150.101089,193.920303 147.254242,181.135284 157.733093,163.940338 
              C165.387589,151.379913 175.896805,141.213638 187.862686,132.577774 
              C199.275589,124.341003 210.128876,115.246460 221.993713,107.738823 
              C237.277023,98.068100 253.739609,91.107063 272.108459,88.775566 
              C283.896240,87.279381 294.144409,89.616013 303.816284,95.970863 
              C311.696564,101.148552 315.438507,111.959145 313.511169,121.216393 
              C311.508026,130.837982 307.839966,139.541748 302.210083,147.536423 
              C300.263794,150.300186 300.852234,151.912491 304.664124,152.051422 
              C309.391357,152.223694 314.325378,152.112320 318.776184,153.441925 
              C330.849579,157.048691 336.784790,167.947342 329.969971,181.299988 
              C325.976166,189.125381 320.468872,196.255829 315.077209,203.264053 
              C311.264099,208.220398 306.772491,212.755020 302.060852,216.880676 
              C299.413086,219.199112 296.023987,220.441498 292.756226,216.440048 
              C289.810791,212.833252 291.011017,210.005020 292.791107,206.682480 
              C298.461609,196.098389 304.115936,185.502014 309.499664,174.771484 
              C310.359863,173.056992 310.644531,169.911972 309.649597,168.736359 
              C308.694824,167.608170 305.347229,167.366943 303.714783,168.139053 
              C294.622681,172.439453 285.127594,176.295349 276.935699,181.982025 
              C267.966553,188.208221 260.261322,196.256180 252.016586,203.523010 
              C251.269150,204.181808 250.473709,204.845184 249.920670,205.656464 
              C243.547409,215.005646 244.424683,214.905792 253.028305,218.365463 
              C266.247955,223.681381 278.321777,230.854965 290.208557,238.560730 
              C297.205902,243.096848 305.002808,246.421158 311.889801,251.100464 
              C320.170013,256.726410 326.170441,264.290375 324.903229,275.149933 
              C323.773315,284.833282 318.422424,292.261719 311.098877,298.476685 
              C302.306580,305.938049 293.279419,313.102997 282.348328,317.108002 
              C273.794159,320.242157 264.871094,322.361145 256.281464,325.408966 
              C245.875626,329.101166 235.808655,333.808167 225.290573,337.104523 
              C217.504883,339.544586 209.278915,340.754883 201.163788,341.917969 
              C193.541977,343.010345 186.460938,340.539276 179.428284,336.816040 
            M199.010315,161.513275 
              C195.550140,165.639145 191.909409,169.629532 188.682297,173.930298 
              C185.661438,177.956177 186.284897,183.854462 189.794083,187.235123 
              C198.856827,195.965927 210.513657,200.077850 221.775894,204.820801 
              C222.608078,205.171295 224.504639,203.906052 225.445297,202.942062 
              C232.524628,195.687241 239.498611,188.329330 246.483170,180.982407 
              C249.350662,177.966156 252.586502,175.186722 254.907074,171.788910 
              C258.984100,165.819199 262.567505,159.504089 266.210144,153.247787 
              C272.503479,142.438950 279.250244,131.835495 282.007568,119.363632 
              C283.612213,112.105423 280.847351,108.733299 273.994659,111.212433 
              C263.929016,114.853935 253.673264,118.685501 244.622162,124.260406 
              C228.050079,134.467804 212.771439,146.583054 199.010315,161.513275 
            M292.488403,98.793068 
              C289.237823,98.195801 286.010498,97.343407 282.732697,97.044739 
              C267.228912,95.632065 253.103027,100.677757 239.520111,107.186073 
              C214.899506,118.983170 193.965790,136.009872 174.842804,155.189499 
              C169.567154,160.480759 165.795013,167.460052 162.107010,174.095047 
              C157.967850,181.541733 159.703979,188.845612 165.608276,194.645309 
              C169.842545,198.804535 174.446686,203.013840 179.667419,205.657028 
              C192.115723,211.959457 205.018753,217.365738 217.758057,223.089615 
              C220.245712,224.207321 222.823425,225.124634 225.938461,226.364853 
              C224.728378,223.234375 223.091263,220.948944 223.136429,218.697266 
              C223.222092,214.427689 220.754929,213.310089 217.554733,211.720474 
              C207.147079,206.550674 196.797623,201.217392 186.747757,195.391586 
              C181.049942,192.088608 178.352036,186.498154 178.885910,179.720291 
              C179.482819,172.142395 183.849808,166.389938 188.532623,160.953506 
              C202.329132,144.936661 218.724380,131.875610 236.083725,119.989372 
              C247.858597,111.926918 260.538727,105.826210 274.742126,103.310074 
              C284.239471,101.627632 290.056366,106.298660 290.076019,115.867691 
              C290.098450,126.790901 284.931732,136.048248 280.085999,145.314850 
              C276.683197,151.822113 272.722504,158.037689 269.010956,164.383514 
              C276.369110,161.070175 283.501160,158.416824 288.666046,151.920456 
              C295.786804,142.963928 302.573456,134.077438 305.107147,122.637352 
              C307.737701,110.759872 304.338226,103.933647 292.488403,98.793068 
            M299.607422,206.127029 
              C298.660065,208.115463 297.712708,210.103897 296.765381,212.092331 
              C298.995789,211.789276 300.437805,210.969742 301.469727,209.791153 
              C307.502716,202.900650 313.757111,196.166580 319.277832,188.880432 
              C322.120636,185.128586 324.274445,180.533661 325.557281,175.986176 
              C328.428955,165.806488 322.867004,158.695572 312.303986,157.867203 
              C303.478851,157.175140 295.072266,158.667023 286.945831,162.057175 
              C266.401245,170.627853 249.604065,184.370438 234.511093,200.363220 
              C232.171890,202.841888 230.519913,206.112030 229.068802,209.255600 
              C226.209351,215.450165 226.720596,220.243500 232.101608,224.496124 
              C238.163803,229.287094 244.805084,233.618195 251.773636,236.931076 
              C265.139893,243.285461 279.027191,248.537827 292.458923,254.763794 
              C297.035583,256.885193 301.277802,260.144745 304.998047,263.608887 
              C312.336273,270.442047 308.866272,285.551605 297.667450,288.577606 
              C280.914215,293.104370 264.847473,300.273987 248.698456,306.835602 
              C245.966385,307.945648 244.287781,311.648407 242.122452,314.153290 
              C245.204117,315.437012 248.249908,317.726196 251.373428,317.837677 
              C268.782318,318.459137 283.920807,311.720825 297.578918,301.674286 
              C304.619232,296.495605 310.804291,290.154297 316.549561,285.069641 
              C316.867249,282.774231 316.863831,281.128113 317.339417,279.634521 
              C320.381348,270.080597 319.084503,263.329315 310.909363,257.626678 
              C303.333588,252.342117 294.893921,248.205566 286.564941,244.112244 
              C273.738495,237.808640 260.421814,232.463837 247.809830,225.775574 
              C238.730560,220.960739 237.530914,214.115356 243.454163,205.820587 
              C254.797012,189.936356 270.024292,178.342270 286.751251,168.757248 
              C292.007538,165.745239 298.031311,163.735901 303.954254,162.303467 
              C312.665314,160.196716 317.479797,165.563538 315.363617,174.260406 
              C314.971069,175.873550 314.628784,177.560257 313.879242,179.015167 
              C309.313354,187.878159 304.636444,196.683990 299.607422,206.127029 
            M212.327545,306.853271 
              C204.253845,310.771179 195.962570,314.313385 188.217331,318.798523 
              C185.266937,320.507050 183.569733,324.379639 181.301376,327.265961 
              C184.965546,329.207611 188.427551,331.976074 192.332993,332.930908 
              C202.729965,335.472931 212.804779,332.436829 222.682510,329.498901 
              C229.673630,327.419556 236.451004,324.621582 243.669342,322.019867 
              C240.962051,319.805573 239.060379,318.250214 237.062286,316.615997 
              C224.461868,321.911743 211.836990,328.101532 197.123718,325.240875 
              C225.594864,303.829956 259.401337,295.021423 291.916260,284.642059 
              C291.916260,282.418762 291.657898,280.626526 291.965637,278.937378 
              C292.823914,274.226135 294.151154,269.588715 294.778534,264.853943 
              C294.974213,263.377289 293.963440,260.868378 292.760864,260.226898 
              C286.966461,257.136017 280.917847,254.521667 274.959442,251.738220 
              C275.360382,253.895203 276.276855,255.226654 277.121796,256.602020 
              C284.900879,269.264648 278.148895,285.099548 264.029907,289.370728 
              C246.866837,294.562805 230.009384,300.765076 212.327545,306.853271 
            z"/>
            <path fill="#A69A88" opacity="1.000000" stroke="none" 
              d="
            M292.862915,98.912537 
              C304.338226,103.933647 307.737701,110.759872 305.107147,122.637352 
              C302.573456,134.077438 295.786804,142.963928 288.666046,151.920456 
              C283.501160,158.416824 276.369110,161.070175 269.010956,164.383514 
              C272.722504,158.037689 276.683197,151.822113 280.085999,145.314850 
              C284.931732,136.048248 290.098450,126.790901 290.076019,115.867691 
              C290.056366,106.298660 284.239471,101.627632 274.742126,103.310074 
              C260.538727,105.826210 247.858597,111.926918 236.083725,119.989372 
              C218.724380,131.875610 202.329132,144.936661 188.532623,160.953506 
              C183.849808,166.389938 179.482819,172.142395 178.885910,179.720291 
              C178.352036,186.498154 181.049942,192.088608 186.747757,195.391586 
              C196.797623,201.217392 207.147079,206.550674 217.554733,211.720474 
              C220.754929,213.310089 223.222092,214.427689 223.136429,218.697266 
              C223.091263,220.948944 224.728378,223.234375 225.938461,226.364853 
              C222.823425,225.124634 220.245712,224.207321 217.758057,223.089615 
              C205.018753,217.365738 192.115723,211.959457 179.667419,205.657028 
              C174.446686,203.013840 169.842545,198.804535 165.608276,194.645309 
              C159.703979,188.845612 157.967850,181.541733 162.107010,174.095047 
              C165.795013,167.460052 169.567154,160.480759 174.842804,155.189499 
              C193.965790,136.009872 214.899506,118.983170 239.520111,107.186073 
              C253.103027,100.677757 267.228912,95.632065 282.732697,97.044739 
              C286.010498,97.343407 289.237823,98.195801 292.862915,98.912537 
            z"/>
            <path fill="#A69B89" opacity="1.000000" stroke="none" 
              d="
            M299.802002,205.817963 
              C304.636444,196.683990 309.313354,187.878159 313.879242,179.015167 
              C314.628784,177.560257 314.971069,175.873550 315.363617,174.260406 
              C317.479797,165.563538 312.665314,160.196716 303.954254,162.303467 
              C298.031311,163.735901 292.007538,165.745239 286.751251,168.757248 
              C270.024292,178.342270 254.797012,189.936356 243.454163,205.820587 
              C237.530914,214.115356 238.730560,220.960739 247.809830,225.775574 
              C260.421814,232.463837 273.738495,237.808640 286.564941,244.112244 
              C294.893921,248.205566 303.333588,252.342117 310.909363,257.626678 
              C319.084503,263.329315 320.381348,270.080597 317.339417,279.634521 
              C316.863831,281.128113 316.867249,282.774231 316.549561,285.069641 
              C310.804291,290.154297 304.619232,296.495605 297.578918,301.674286 
              C283.920807,311.720825 268.782318,318.459137 251.373428,317.837677 
              C248.249908,317.726196 245.204117,315.437012 242.122452,314.153290 
              C244.287781,311.648407 245.966385,307.945648 248.698456,306.835602 
              C264.847473,300.273987 280.914215,293.104370 297.667450,288.577606 
              C308.866272,285.551605 312.336273,270.442047 304.998047,263.608887 
              C301.277802,260.144745 297.035583,256.885193 292.458923,254.763794 
              C279.027191,248.537827 265.139893,243.285461 251.773636,236.931076 
              C244.805084,233.618195 238.163803,229.287094 232.101608,224.496124 
              C226.720596,220.243500 226.209351,215.450165 229.068802,209.255600 
              C230.519913,206.112030 232.171890,202.841888 234.511093,200.363220 
              C249.604065,184.370438 266.401245,170.627853 286.945831,162.057175 
              C295.072266,158.667023 303.478851,157.175140 312.303986,157.867203 
              C322.867004,158.695572 328.428955,165.806488 325.557281,175.986176 
              C324.274445,180.533661 322.120636,185.128586 319.277832,188.880432 
              C313.757111,196.166580 307.502716,202.900650 301.469727,209.791153 
              C300.437805,210.969742 298.995789,211.789276 296.765381,212.092331 
              C297.712708,210.103897 298.660065,208.115463 299.802002,205.817963 
            M298.136627,290.869781 
              C282.143646,295.867432 266.615051,301.820007 253.103104,312.037750 
              C254.017029,312.927277 254.632996,313.177582 255.253296,313.188782 
              C256.748749,313.215759 258.266815,313.276611 259.739655,313.068390 
              C272.632263,311.246155 283.625244,305.196533 293.726074,297.376862 
              C295.861298,295.723846 297.337860,293.219910 299.458923,290.977570 
              C299.279785,290.955414 299.100616,290.933228 298.136627,290.869781 
            z"/>
            <path fill="#A79B8A" opacity="1.000000" stroke="none" 
              d="
            M212.673630,306.691772 
              C230.009384,300.765076 246.866837,294.562805 264.029907,289.370728 
              C278.148895,285.099548 284.900879,269.264648 277.121796,256.602020 
              C276.276855,255.226654 275.360382,253.895203 274.959442,251.738220 
              C280.917847,254.521667 286.966461,257.136017 292.760864,260.226898 
              C293.963440,260.868378 294.974213,263.377289 294.778534,264.853943 
              C294.151154,269.588715 292.823914,274.226135 291.965637,278.937378 
              C291.657898,280.626526 291.916260,282.418762 291.916260,284.642059 
              C259.401337,295.021423 225.594864,303.829956 197.123718,325.240875 
              C211.836990,328.101532 224.461868,321.911743 237.062286,316.615997 
              C239.060379,318.250214 240.962051,319.805573 243.669342,322.019867 
              C236.451004,324.621582 229.673630,327.419556 222.682510,329.498901 
              C212.804779,332.436829 202.729965,335.472931 192.332993,332.930908 
              C188.427551,331.976074 184.965546,329.207611 181.301376,327.265961 
              C183.569733,324.379639 185.266937,320.507050 188.217331,318.798523 
              C195.962570,314.313385 204.253845,310.771179 212.673630,306.691772 
            z"/>
            <path fill="#F9F3EB" opacity="1.000000" stroke="none" 
              d="
            M299.117889,291.108063 
              C297.337860,293.219910 295.861298,295.723846 293.726074,297.376862 
              C283.625244,305.196533 272.632263,311.246155 259.739655,313.068390 
              C258.266815,313.276611 256.748749,313.215759 255.253296,313.188782 
              C254.632996,313.177582 254.017029,312.927277 253.103104,312.037750 
              C266.615051,301.820007 282.143646,295.867432 298.576965,290.940857 
              C299.017303,291.011932 299.117889,291.108063 299.117889,291.108063 
            z"/>
            <path fill="#F9F3EB" opacity="1.000000" stroke="none" 
              d="
            M298.969391,290.961487 
              C299.100616,290.933228 299.279785,290.955414 299.288391,291.042816 
              C299.117889,291.108063 299.017303,291.011932 298.969391,290.961487 
            z"/>
            </svg>
            <span className='font-bold'>sheshare</span>
          </Link>

          <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300'>
            <div>Check In</div>
            <div className='border-l broder-gray-300'></div>
            <div>Check Out</div>
            <div className='border-l broder-gray-300'></div>
            <div>Where</div>
            <div className='border-l broder-gray-300'></div>
            <div>Who</div>
            <button className='bg-primary text-white p-1 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            </button>
          </div>

          <Link to={user? '/account' : '/login'} className='flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <div className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>
            </div>
            {!!user && (
              <div>
                {user.name}
              </div>
            )}
          </Link>
        </header>
    );
}