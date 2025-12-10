'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface BoothVisualizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
}

const BoothVisualizerModal = ({ isOpen, onClose, packageName }: BoothVisualizerModalProps) => {
  const [selectedView, setSelectedView] = useState<'3d' | 'floor' | 'dimensions'>('3d');

  if (!isOpen) return null;

  const views = [
  { id: '3d', label: 'Vue 3D', icon: 'CubeIcon' },
  { id: 'floor', label: 'Plan d&apos;Étage', icon: 'MapIcon' },
  { id: 'dimensions', label: 'Dimensions', icon: 'RectangleStackIcon' }];


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative bg-card rounded-2xl shadow-warm-xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h3 className="text-2xl font-bold text-foreground">Visualiseur de Stand</h3>
            <p className="text-sm text-muted-foreground mt-1">Forfait {packageName}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-smooth"
            aria-label="Fermer">

            <Icon name="XMarkIcon" size={24} variant="outline" />
          </button>
        </div>

        {/* View Tabs */}
        <div className="flex items-center space-x-2 px-6 py-4 border-b border-border bg-muted/30">
          {views.map((view) =>
          <button
            key={view.id}
            onClick={() => setSelectedView(view.id as any)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-smooth ${
            selectedView === view.id ?
            'bg-primary text-white shadow-warm' :
            'bg-card text-foreground hover:bg-muted'}`
            }>

              <Icon name={view.icon as any} size={18} variant="outline" />
              <span>{view.label}</span>
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {selectedView === '3d' &&
          <div className="space-y-6">
              <div className="relative rounded-xl overflow-hidden bg-muted aspect-video">
                <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1bb54da7d-1764841286499.png"
                alt="3D visualization of exhibition booth with modern display panels, product shelves, and meeting area"
                className="w-full h-full object-cover" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center">
                    <Icon name="CubeTransparentIcon" size={48} variant="outline" className="text-primary mx-auto mb-3" />
                    <p className="text-sm font-semibold text-foreground">Vue 3D Interactive</p>
                    <p className="text-xs text-muted-foreground mt-1">Rotation à 360° disponible</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-2xl font-bold text-foreground mb-1">36m²</div>
                  <div className="text-sm text-muted-foreground">Surface Totale</div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-2xl font-bold text-foreground mb-1">6m × 6m</div>
                  <div className="text-sm text-muted-foreground">Dimensions</div>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-2xl font-bold text-foreground mb-1">4.5m</div>
                  <div className="text-sm text-muted-foreground">Hauteur Plafond</div>
                </div>
              </div>
            </div>
          }

          {selectedView === 'floor' &&
          <div className="space-y-6">
              <div className="relative rounded-xl overflow-hidden bg-muted aspect-video">
                <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_120b5e7e4-1764822388231.png"
                alt="Exhibition hall floor plan showing booth layout with numbered sections and walkways"
                className="w-full h-full object-cover" />

              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPinIcon" size={24} variant="solid" className="text-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Emplacement Premium</div>
                    <div className="text-sm text-muted-foreground">
                      Votre stand sera situé dans la zone A, près de l&apos;entrée principale avec un trafic piétonnier élevé.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }

          {selectedView === 'dimensions' &&
          <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-4">Spécifications Techniques</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Largeur</span>
                      <span className="font-semibold text-foreground">6.0m</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Profondeur</span>
                      <span className="font-semibold text-foreground">6.0m</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Hauteur</span>
                      <span className="font-semibold text-foreground">4.5m</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Surface</span>
                      <span className="font-semibold text-foreground">36m²</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-muted rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-4">Équipements Inclus</h4>
                  <ul className="space-y-3">
                    {[
                  'Murs modulaires blancs',
                  'Éclairage LED professionnel',
                  'Prises électriques (4x)',
                  'Connexion Wi-Fi haut débit',
                  'Moquette premium',
                  'Enseigne lumineuse personnalisée'].
                  map((item, index) =>
                  <li key={index} className="flex items-center space-x-2 text-sm">
                        <Icon name="CheckCircleIcon" size={18} variant="solid" className="text-success flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                  )}
                  </ul>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Icon name="LightBulbIcon" size={24} variant="solid" className="text-accent flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Personnalisation Disponible</div>
                    <div className="text-sm text-muted-foreground">
                      Contactez notre équipe pour discuter des options de personnalisation supplémentaires pour votre stand.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border bg-muted/30">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-card border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-smooth">

            Fermer
          </button>
          <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 shadow-warm transition-smooth">
            Réserver ce Stand
          </button>
        </div>
      </div>
    </div>);

};

export default BoothVisualizerModal;