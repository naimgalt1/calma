import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Nudo wireframe translúcido que gira lentamente y reacciona levemente al puntero.
 * Se dibuja detrás del texto del hero y se adapta al tamaño de su contenedor.
 */
export default function ZenCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const knotGeometry = new THREE.TorusKnotGeometry(1.3, 0.38, 220, 32);
    const knotMaterial = new THREE.MeshBasicMaterial({
      color: 0x7d9b76,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const knot = new THREE.Mesh(knotGeometry, knotMaterial);
    scene.add(knot);

    const pointer = { x: 0, y: 0 };
    const handlePointer = (event) => {
      pointer.x = event.clientX / window.innerWidth - 0.5;
      pointer.y = event.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('pointermove', handlePointer);

    const resize = () => {
      const width = mount.clientWidth || 1;
      const height = mount.clientHeight || 1;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      // En pantallas estrechas se aleja la cámara para que el nudo no se corte
      camera.position.z = width < 600 ? 8.5 : 6;
      knot.scale.setScalar(width < 600 ? 0.6 : 1);
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      knot.rotation.x += 0.0025;
      knot.rotation.y += 0.004 + pointer.x * 0.01;
      knot.rotation.z = pointer.y * 0.2;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', handlePointer);
      knotGeometry.dispose();
      knotMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="zen-canvas" aria-hidden="true" />;
}
