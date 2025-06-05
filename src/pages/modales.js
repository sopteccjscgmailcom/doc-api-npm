import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Modal from '@site/src/components/Modal';

export default function Modales() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout
      title="Ejemplos de Modales"
      description="Página de demostración de modales en Docusaurus">
      <main className="container margin-vert--lg">
        <h1>Ejemplos de Modales</h1>
        
        <div style={{ marginTop: '2rem' }}>
          <button
            className="button button--primary button--lg"
            onClick={() => setIsModalOpen(true)}>
            Abrir Modal de Ejemplo
          </button>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Modal de Ejemplo">
            <div>
              <p>Este es un ejemplo de contenido dentro del modal.</p>
              <p>Puedes incluir cualquier contenido HTML o componentes de React aquí.</p>
            </div>
          </Modal>
        </div>
      </main>
    </Layout>
  );
}