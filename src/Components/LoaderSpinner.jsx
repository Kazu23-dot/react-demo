/*import React from 'react';*/
/*☆*/import {Audio} from 'react-loader-spinner'
/*☆*/import {BallTriangle} from 'react-loader-spinner'
/*☆*/import {Bars} from 'react-loader-spinner'
/*☆*/import {Blocks} from 'react-loader-spinner'
/*☆*/import {Circles} from 'react-loader-spinner'
/*☆*/import {CirclesWithBar} from 'react-loader-spinner'
import {ColorRing} from 'react-loader-spinner'
/*☆*/import {Comment} from 'react-loader-spinner'
import {Discuss} from 'react-loader-spinner'

/*☆*/import {Dna} from 'react-loader-spinner'
/*☆*/import {FallingLines} from 'react-loader-spinner'
import {FidgetSpinner} from 'react-loader-spinner'
/*☆*/import {Grid} from 'react-loader-spinner'
import {Hearts} from 'react-loader-spinner'
/*☆*/import {InfinitySpin} from 'react-loader-spinner'
/*☆*/import {LineWave} from 'react-loader-spinner'
import {MagnifyingGlass} from 'react-loader-spinner'

/*☆*/import {MutatingDots} from 'react-loader-spinner'
/*☆*/import {Oval} from 'react-loader-spinner'
import {ProgressBar} from 'react-loader-spinner'
/*☆*/import {Puff as LoaderPuff} from 'react-loader-spinner'
/*☆*/import {Radio} from 'react-loader-spinner'
/*☆*/import {RevolvingDot} from 'react-loader-spinner'
/*☆*/import {Rings} from 'react-loader-spinner'
/*☆*/import {RotatingLines} from 'react-loader-spinner'
/*☆*/import {RotatingSquare} from 'react-loader-spinner'

import {RotatingTriangles} from 'react-loader-spinner'
/*☆*/import {TailSpin} from 'react-loader-spinner'
/*☆*/import {ThreeCircles} from 'react-loader-spinner'
/*☆*/import {ThreeDots} from 'react-loader-spinner'
/*☆*/import {Triangle} from 'react-loader-spinner'
import {Vortex} from 'react-loader-spinner'
/*☆*/import {Watch} from 'react-loader-spinner'

import classes from "./Style/LoadingCss.module.scss";

export const Loading = () => {
    return (
        <>
          <div className={classes.LoadingFirst}>   
            <Audio timeout={3000} color="#7FFFD4" height={70} width={100} />
            <BallTriangle timeout={3000} color="aqua" height={70} width={100} />
            <Bars timeout={3000} color="#FF66FF" height={70} width={100} />
            <Blocks timeout={3000} color="aqua" height={70} width={100} />          
            <Circles timeout={3000} color="aqua" height={70} width={100} />
            <CirclesWithBar timeout={3000} color="aqua" height={70} width={100} />
            <ColorRing timeout={3000} color="aqua" height={70} width={100} />
            <Comment timeout={3000} color="aqua" height={70} width={100} />
            <Discuss timeout={3000} color="aqua" height={70} width={100} />
          </div>
          <div className={classes.LoadingSecond}>                  
            <Dna timeout={3000} color="aqua" height={70} width={100} />
            <FallingLines timeout={3000} color="aqua" height={70} width={100} />
            <FidgetSpinner timeout={3000} color="aqua" height={70} width={100} />
            <Grid timeout={3000} color="aqua" height={70} width={100} />
            <Hearts timeout={3000} color="#FF33CC" height={70} width={100} />
            <InfinitySpin timeout={3000} color="aqua" height={70} width={100} />
            <LineWave timeout={3000} color="aqua" height={70} width={100} />
            <Rings timeout={3000} color="aqua" height={70} width={100} />
            <MagnifyingGlass timeout={3000} color="aqua" height={70} width={100} />
          </div>
          <div className={classes.LoadingThird}>                  
            <MutatingDots timeout={3000} color="aqua" height={70} width={100} />
            <Oval timeout={3000} color="aqua" height={70} width={100} />
            <ProgressBar timeout={3000} color="aqua" height={70} width={100} />
            <LoaderPuff timeout={3000} color="aqua" height={70} width={100} />
            <Radio timeout={3000} color="aqua" height={70} width={100} />
            <RevolvingDot timeout={3000} color="aqua" height={70} width={100} />
            <Rings timeout={3000} color="aqua" height={70} width={100} />
            <RotatingLines timeout={3000} color="aqua" height={70} width={100} />
            <RotatingSquare timeout={3000} color="aqua" height={70} width={100} />
          </div>
          <div className={classes.LoadingForce}>                  
            <RotatingTriangles timeout={3000} color="aqua" height={70} width={100} />
            <TailSpin timeout={3000} color="aqua" height={70} width={100} />
            <ThreeCircles timeout={3000} color="aqua" height={70} width={100} />
            <ThreeDots timeout={3000} color="aqua" height={70} width={100} />
            <Triangle timeout={3000} color="aqua" height={70} width={100} />
            <Vortex timeout={3000} color="aqua" height={70} width={100} />
            <Watch timeout={3000} color="aqua" height={70} width={100} />
          </div>
        </>
      );
};