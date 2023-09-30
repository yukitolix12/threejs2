window.addEventListener("load", init);

function init() {
    /* サイズを指定*/ 
    const width = 960;
    const height = 540;
    let rot = 0;

    /* レンダラー作成 */
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#myCanvas"),
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    /* シーン作成 */
    const scene = new THREE.Scene();

    /* カメラ作成 */
    const camera = new THREE.PerspectiveCamera(45, width / height);

    

    /* 球体生成 */
    const geometry = new THREE.SphereGeometry(300, 30, 30);
    /* マテリアル生成、材質決定*/
    const material = new THREE.MeshStandardMaterial({
        map: new THREE.TextureLoader().load("images/earthmap1k.jpg"),
    });
    /* メッシュ作成 */
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    /* 平行光源 */
    const directionalLight =new THREE.DirectionalLight( 0xffffff, 1.9);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    /* ポイント光源 */
    const pointLight = new THREE.PointLight( 0xffffff, 2, 1000);
    scene.add(pointLight);
    const pointLightHelper = new THREE.pointLightHelper(pointLight, 30);
    scene.add(pointLightHelper);

    /* フレーム毎に呼び出される関数 */
    function tick() {
        rot += 0.5;

        /* ラジアン変換 */
        const radian = (rot * Math.PI) / 180;

        /* 角度に応じてカメラの位置を変更する */
        camera.position.x = 1000 * Math.sin(radian);

        /* レンダリング */ 
        renderer.render(scene, camera);
    }
}