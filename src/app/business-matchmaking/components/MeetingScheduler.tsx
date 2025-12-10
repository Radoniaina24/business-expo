'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface MeetingSchedulerProps {
  matchName: string;
  onClose: () => void;
  onSchedule: (date: string, time: string, type: string) => void;
}

const MeetingScheduler = ({ matchName, onClose, onSchedule }: MeetingSchedulerProps) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [meetingType, setMeetingType] = useState('video');

  const availableDates = [
    '2025-12-10',
    '2025-12-11',
    '2025-12-12',
    '2025-12-13',
    '2025-12-16'
  ];

  const timeSlots: TimeSlot[] = [
    { id: '1', time: '09:00', available: true },
    { id: '2', time: '10:00', available: true },
    { id: '3', time: '11:00', available: false },
    { id: '4', time: '14:00', available: true },
    { id: '5', time: '15:00', available: true },
    { id: '6', time: '16:00', available: true }
  ];

  const handleSchedule = () => {
    if (selectedDate && selectedTime) {
      onSchedule(selectedDate, selectedTime, meetingType);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short' 
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-card rounded-lg shadow-warm-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-foreground">Planifier une Réunion</h2>
            <p className="text-sm text-muted-foreground mt-1">avec {matchName}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-smooth"
          >
            <Icon name="XMarkIcon" size={24} variant="outline" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Type de Réunion
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setMeetingType('video')}
                className={`p-4 border rounded-lg transition-smooth ${
                  meetingType === 'video' ?'border-primary bg-primary/5' :'border-border hover:border-primary'
                }`}
              >
                <Icon name="VideoCameraIcon" size={24} variant="outline" className="mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium text-foreground">Vidéo</div>
              </button>
              <button
                onClick={() => setMeetingType('in-person')}
                className={`p-4 border rounded-lg transition-smooth ${
                  meetingType === 'in-person' ?'border-primary bg-primary/5' :'border-border hover:border-primary'
                }`}
              >
                <Icon name="UserGroupIcon" size={24} variant="outline" className="mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium text-foreground">En Personne</div>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Sélectionner une Date
            </label>
            <div className="grid grid-cols-5 gap-2">
              {availableDates.map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`p-3 border rounded-lg text-center transition-smooth ${
                    selectedDate === date
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border hover:border-primary'
                  }`}
                >
                  <div className="text-xs font-medium">{formatDate(date)}</div>
                </button>
              ))}
            </div>
          </div>

          {selectedDate && (
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Sélectionner l'Heure
              </label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => slot.available && setSelectedTime(slot.time)}
                    disabled={!slot.available}
                    className={`p-3 border rounded-lg text-center transition-smooth ${
                      !slot.available
                        ? 'border-border bg-muted text-muted-foreground cursor-not-allowed'
                        : selectedTime === slot.time
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    <div className="text-sm font-medium">{slot.time}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-border flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-2 text-sm font-semibold text-foreground border border-border rounded-lg hover:bg-muted transition-smooth"
            >
              Annuler
            </button>
            <button
              onClick={handleSchedule}
              disabled={!selectedDate || !selectedTime}
              className="px-6 py-2 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 shadow-warm transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirmer la Réunion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingScheduler;