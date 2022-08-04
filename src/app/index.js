import * as actions from 'bundle-text:./actions/*.js'
import * as pages from 'bundle-text:./views/**/*.html'  
import indexPage from 'bundle-text:../app/root.html'
import manifest from 'bundle-text:./app.webmanifest'
 
 
// this can be moved to the sdk i think
pages.indexPage = indexPage
pages.manifest = manifest

if (process.env.NODE_ENV === 'development') {
    console.log('Happy developing!');
    // console.log(indexPage)
}
 
export {pages,actions}
 