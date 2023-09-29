window.addEventListener("head", init);

function init() {
    /* サイズを指定*/ 
    const width = 960;
    const height = 540;
    let rot = 0;

    /* シーン作成 */
    const scene = new THREE.Scene();

    /* カメラ作成 */
    const camera = new THREE.PerspectiveCamera(45, width / height);
}