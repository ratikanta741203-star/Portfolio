import React, { useState } from 'react';
import { Project } from '../../types';
import { X, ExternalLink, Shield, Radio, Volume2, ShoppingBag, Utensils, GraduationCap, AlertTriangle, CheckCircle, RefreshCw, Send } from 'lucide-react';

interface ProjectDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Active tab inside modal
  const [activeTab, setActiveTab] = useState<'simulation' | 'overview' | 'features'>('simulation');

  // Interactive state for Disaster Map
  const [selectedDistrict, setSelectedDistrict] = useState('Jagatsinghpur');
  const [sosSent, setSosSent] = useState(false);
  const [shelterOccupancy, setShelterOccupancy] = useState(76);

  // Interactive state for Cyber Threat
  const [threatScore, setThreatScore] = useState(14);
  const [isAttacking, setIsAttacking] = useState(false);
  const [blockedIps, setBlockedIps] = useState<string[]>([]);

  // Interactive state for AI Voice Assistant
  const [assistantInput, setAssistantInput] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceMessages, setVoiceMessages] = useState<{ sender: 'user' | 'assistant'; text: string }[]>([
    { sender: 'assistant', text: "Hello! I am your AI Girl Assistant. How can I help you today?" },
  ]);

  // Interactive state for A9 Shop
  const [cartItems, setCartItems] = useState<{ id: string; name: string; price: number; qty: number }[]>([
    { id: '1', name: 'Fresh Farm Mustard Oil (1L)', price: 175, qty: 1 },
    { id: '2', name: 'Organic Coastal Rice (5kg)', price: 290, qty: 1 },
  ]);
  const [shopSuccess, setShopSuccess] = useState(false);

  // Interactive state for A9 Restaurant
  const [resGuests, setResGuests] = useState('2');
  const [resTime, setResTime] = useState('19:30');
  const [resConfirmed, setResConfirmed] = useState(false);

  // Trigger voice synthesis safely if available
  const speakText = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.0;
        utterance.pitch = 1.1;
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.warn('Speech synthesis not available', err);
        setIsSpeaking(false);
      }
    }
  };

  const handleVoiceSend = (query?: string) => {
    const textToSend = query || assistantInput;
    if (!textToSend.trim()) return;

    const userMsg = { sender: 'user' as const, text: textToSend };
    setVoiceMessages((prev) => [...prev, userMsg]);
    setAssistantInput('');

    setTimeout(() => {
      let reply = "I'm processing that request. Ratikanta is ready to bring high-impact software solutions to your team!";
      const lower = textToSend.toLowerCase();
      if (lower.includes('skill') || lower.includes('stack')) {
        reply = "Ratikanta is proficient in Java, Python, JavaScript, MySQL, HTML5, CSS3, REST APIs, and UI engineering.";
      } else if (lower.includes('hackathon') || lower.includes('sih') || lower.includes('disaster')) {
        reply = "He led the SIH team developing Odisha Disaster Guardian and RUDRAM 2.0 with real-time GIS telemetry and emergency SOS systems.";
      } else if (lower.includes('contact') || lower.includes('hire')) {
        reply = "You can reach Ratikanta via email at ratikanta741203@gmail.com or WhatsApp at +91 9078835620!";
      }

      setVoiceMessages((prev) => [...prev, { sender: 'assistant', text: reply }]);
      speakText(reply);
    }, 450);
  };

  const handleSimulateAttack = () => {
    setIsAttacking(true);
    setThreatScore(89);
    setTimeout(() => {
      setBlockedIps((prev) => ['192.168.4.102 (DDoS Syn Flood)', '10.0.12.88 (SQL Injection attempt)', ...prev]);
      setThreatScore(22);
      setIsAttacking(false);
    }, 1200);
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white dark:bg-brand-darkCard border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50">
          <div className="flex items-center space-x-3">
            <span className="text-xl">{project.title.split(' ')[0]}</span>
            <div>
              <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white leading-tight">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {project.tagline}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center space-x-2 px-6 pt-3 pb-2 border-b border-slate-200 dark:border-slate-800 text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveTab('simulation')}
            className={`px-3 py-1.5 rounded-lg transition-colors font-semibold ${
              activeTab === 'simulation'
                ? 'bg-brand-blue text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            ⚡ Live Interactive Demo
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-lg transition-colors font-semibold ${
              activeTab === 'overview'
                ? 'bg-brand-blue text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            📋 Project Architecture
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('features')}
            className={`px-3 py-1.5 rounded-lg transition-colors font-semibold ${
              activeTab === 'features'
                ? 'bg-brand-blue text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            ✨ Key Capabilities
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left">
          {/* SIMULATION TAB */}
          {activeTab === 'simulation' && (
            <div>
              {/* Odisha Disaster Guardian Demo */}
              {project.interactiveType === 'disaster-map' && (
                <div className="space-y-4 font-sans">
                  <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-600 dark:text-blue-300 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Radio className="w-4 h-4 text-blue-500 animate-pulse" />
                      <span className="font-semibold">ODISHA DISASTER RADAR • LIVE GEOSPATIAL FEED</span>
                    </div>
                    <span className="font-mono bg-blue-500/20 px-2 py-0.5 rounded">Category 3 Cyclone Alert</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <span className="text-xs text-slate-400 font-mono">Select Coastal District:</span>
                      <select
                        value={selectedDistrict}
                        onChange={(e) => setSelectedDistrict(e.target.value)}
                        className="w-full mt-2 p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-medium text-slate-900 dark:text-white"
                      >
                        <option value="Jagatsinghpur">Jagatsinghpur (Kujang / Paradeep)</option>
                        <option value="Kendrapara">Kendrapara (Rajnagar / Marshaghai)</option>
                        <option value="Puri">Puri (Konark / Brahmagiri)</option>
                        <option value="Balasore">Balasore (Chandipur)</option>
                        <option value="Bhadrak">Bhadrak (Basudevpur / Dhamra)</option>
                      </select>
                      <div className="mt-3 text-xs text-slate-500 font-mono space-y-1">
                        <p>Wind: 138 km/h</p>
                        <p>Inundation Risk: High (Level 3)</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <span className="text-xs text-slate-400 font-mono">Shelter Capacity ({selectedDistrict})</span>
                      <div className="mt-3">
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span>Occupancy</span>
                          <span className="font-bold text-blue-500">{shelterOccupancy}%</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500"
                            style={{ width: `${shelterOccupancy}%` }}
                          ></div>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-2 font-mono">
                          Remaining capacity: {Math.round((100 - shelterOccupancy) * 4.5)} beds
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                      <div>
                        <span className="text-xs text-slate-400 font-mono">Citizen Emergency SOS</span>
                        <p className="text-xs text-slate-500 mt-1">One-tap beacon with geo-coordinates.</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setSosSent(true);
                          setShelterOccupancy((prev) => Math.min(prev + 2, 98));
                        }}
                        className={`mt-3 py-2.5 px-4 rounded-xl font-semibold text-xs transition-all flex items-center justify-center space-x-2 ${
                          sosSent
                            ? 'bg-emerald-500 text-white'
                            : 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30'
                        }`}
                      >
                        {sosSent ? (
                          <>
                            <CheckCircle className="w-4 h-4" />
                            <span>SOS Beacon Active &amp; Dispatched!</span>
                          </>
                        ) : (
                          <>
                            <AlertTriangle className="w-4 h-4" />
                            <span>Broadcast Citizen SOS Beacon</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {sosSent && (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono space-y-1">
                      <p className="font-bold">✓ DISPATCH CONFIRMED:</p>
                      <p>Target Node: {selectedDistrict} Sector 4-B | Telemetry Ping: 20.27° N, 86.67° E</p>
                      <p>Nearest Rescue Boat OD-741 assigned. Estimated arrival: 14 mins.</p>
                    </div>
                  )}
                </div>
              )}

              {/* DEFEND AI Demo */}
              {project.interactiveType === 'cyber-threat' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-600 dark:text-cyan-300">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-cyan-400" />
                      <span className="font-semibold font-mono">DEFEND AI • REAL-TIME PACKET INSPECTOR</span>
                    </div>
                    <span className="font-mono">Threat Score: {threatScore} / 100</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <span className="text-xs font-mono text-slate-400">Heuristic Severity Level</span>
                      <div className="mt-3 flex items-center space-x-3">
                        <div className="text-3xl font-mono font-extrabold text-cyan-400">{threatScore}%</div>
                        <div className="flex-1">
                          <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div
                              className={`h-full transition-all duration-700 ${
                                threatScore > 50 ? 'bg-red-500' : 'bg-cyan-400'
                              }`}
                              style={{ width: `${threatScore}%` }}
                            ></div>
                          </div>
                          <span className="text-[11px] font-mono text-slate-500 mt-1 block">
                            {threatScore > 50 ? 'Anomaly Attack Swarm In Progress' : 'Normal Network Traffic'}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleSimulateAttack}
                        disabled={isAttacking}
                        className="mt-4 w-full py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2 disabled:opacity-60"
                      >
                        {isAttacking ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>Intercepting Anomalous Packets...</span>
                          </>
                        ) : (
                          <>
                            <Shield className="w-4 h-4" />
                            <span>Simulate Threat Attack &amp; Auto-Mitigate</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-xs">
                      <span className="text-slate-400 block mb-2">Automated Quarantine Log</span>
                      <div className="space-y-1.5 max-h-36 overflow-y-auto">
                        {blockedIps.length === 0 ? (
                          <p className="text-slate-500 italic">No active anomalies quarantined. Network clear.</p>
                        ) : (
                          blockedIps.map((ip, idx) => (
                            <div key={idx} className="p-2 rounded bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-between">
                              <span>⛔ {ip}</span>
                              <span className="text-[10px] bg-red-500/20 px-1.5 py-0.5 rounded">BLOCKED</span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* AI Girl Assistant Demo */}
              {project.interactiveType === 'ai-voice' && (
                <div className="space-y-4 font-sans">
                  <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-between text-xs text-purple-600 dark:text-purple-300">
                    <div className="flex items-center space-x-2">
                      <Volume2 className={`w-4 h-4 ${isSpeaking ? 'animate-bounce text-purple-400' : ''}`} />
                      <span className="font-semibold font-mono">CONVERSATIONAL VOICE AGENT SIMULATOR</span>
                    </div>
                    <span className="text-[11px] font-mono">
                      {isSpeaking ? 'Speaking audio...' : 'Microphone Ready'}
                    </span>
                  </div>

                  {/* Audio Waveform animation container */}
                  <div className="h-16 rounded-xl bg-slate-950 flex items-center justify-center space-x-1.5 px-4 overflow-hidden">
                    {[12, 28, 45, 18, 56, 32, 64, 40, 24, 60, 36, 16, 48, 28, 14].map((height, i) => (
                      <div
                        key={i}
                        className={`w-1.5 bg-gradient-to-t from-brand-purple to-brand-pink rounded-full transition-all duration-150 ${
                          isSpeaking ? 'animate-pulse' : 'opacity-40'
                        }`}
                        style={{ height: isSpeaking ? `${Math.min(height * 1.2, 54)}px` : '10px' }}
                      ></div>
                    ))}
                  </div>

                  {/* Messages scroll box */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 max-h-48 overflow-y-auto text-xs font-mono">
                    {voiceMessages.map((msg, i) => (
                      <div
                        key={i}
                        className={`p-2.5 rounded-xl max-w-[85%] ${
                          msg.sender === 'user'
                            ? 'ml-auto bg-brand-purple text-white'
                            : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        <span className="block text-[10px] opacity-70 mb-0.5">
                          {msg.sender === 'user' ? 'You' : 'AI Girl Assistant'}
                        </span>
                        {msg.text}
                      </div>
                    ))}
                  </div>

                  {/* Quick prompt suggestions */}
                  <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                    <span className="text-slate-400 py-1 text-[11px]">Suggestions:</span>
                    <button
                      type="button"
                      onClick={() => handleVoiceSend("What are Ratikanta's core technical skills?")}
                      className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-purple-500/20 hover:text-purple-400 transition-colors"
                    >
                      Skills &amp; Stack
                    </button>
                    <button
                      type="button"
                      onClick={() => handleVoiceSend("Tell me about his SIH Hackathon projects")}
                      className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-purple-500/20 hover:text-purple-400 transition-colors"
                    >
                      SIH Hackathons
                    </button>
                    <button
                      type="button"
                      onClick={() => handleVoiceSend("How do I contact Ratikanta for an internship?")}
                      className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-purple-500/20 hover:text-purple-400 transition-colors"
                    >
                      Contact &amp; Hire
                    </button>
                  </div>

                  {/* Input row */}
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={assistantInput}
                      onChange={(e) => setAssistantInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleVoiceSend()}
                      placeholder="Ask the AI assistant about Ratikanta's background..."
                      className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => handleVoiceSend()}
                      className="px-4 py-2.5 rounded-xl bg-brand-purple text-white hover:bg-purple-600 transition-colors flex items-center space-x-1"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* A9 Shop Demo */}
              {project.interactiveType === 'shop-catalog' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-600 dark:text-emerald-300 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <ShoppingBag className="w-4 h-4 text-emerald-500" />
                      <span className="font-semibold font-mono">A9 HYPER-LOCAL SHOPPING ENGINE</span>
                    </div>
                    <span className="font-mono">Local Delivery: Free within 5km</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5">
                      <span className="text-xs font-mono text-slate-400 block mb-1">Local Product Catalog</span>
                      {[
                        { id: '1', name: 'Fresh Farm Mustard Oil (1L)', price: 175 },
                        { id: '2', name: 'Organic Coastal Rice (5kg)', price: 290 },
                        { id: '3', name: 'Pure Turmeric Powder (500g)', price: 110 },
                        { id: '4', name: 'Artisanal Village Honey (500g)', price: 240 },
                      ].map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
                          <div>
                            <span className="font-medium text-slate-900 dark:text-white block">{item.name}</span>
                            <span className="text-slate-500 font-mono">₹{item.price}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setCartItems((prev) => {
                                const exist = prev.find((p) => p.id === item.id);
                                if (exist) {
                                  return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
                                }
                                return [...prev, { ...item, qty: 1 }];
                              });
                            }}
                            className="px-2.5 py-1 rounded bg-emerald-500 hover:bg-emerald-600 text-white font-mono text-[11px] font-semibold transition-colors"
                          >
                            + Add
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-mono text-slate-400 block mb-2">Cart &amp; Fast Checkout</span>
                        <div className="space-y-1.5 max-h-36 overflow-y-auto text-xs font-mono">
                          {cartItems.map((c) => (
                            <div key={c.id} className="flex justify-between items-center py-1 border-b border-slate-200 dark:border-slate-800">
                              <span className="truncate pr-2">{c.name} (x{c.qty})</span>
                              <span className="font-bold">₹{c.price * c.qty}</span>
                            </div>
                          ))}
                        </div>
                        <div className="pt-3 flex justify-between items-center text-sm font-bold text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 mt-2">
                          <span>Total:</span>
                          <span className="text-emerald-500">₹{cartTotal}</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setShopSuccess(true)}
                        className="mt-4 w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>Confirm Order Simulation</span>
                      </button>
                    </div>
                  </div>

                  {shopSuccess && (
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
                      ✓ Order #A9-9821 successfully dispatched to local merchant! Receipt forwarded via WhatsApp webhook.
                    </div>
                  )}
                </div>
              )}

              {/* A9 Restaurant Demo */}
              {project.interactiveType === 'restaurant-menu' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-600 dark:text-amber-400 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Utensils className="w-4 h-4 text-amber-500" />
                      <span className="font-semibold font-mono">A9 RESTAURANT TABLE RESERVATION &amp; DINING SYSTEM</span>
                    </div>
                    <span className="font-mono">Fine Dining • Good Food</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <span className="text-xs font-mono text-slate-400 block mb-3">Reserve a Dining Table</span>
                      <div className="space-y-3 text-xs">
                        <div>
                          <label className="block text-slate-500 font-mono mb-1">Guests Count:</label>
                          <select
                            value={resGuests}
                            onChange={(e) => setResGuests(e.target.value)}
                            className="w-full p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono"
                          >
                            <option value="2">2 Guests (Couple Table)</option>
                            <option value="4">4 Guests (Family Booth)</option>
                            <option value="8">8 Guests (Chef's Banquet)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-slate-500 font-mono mb-1">Preferred Slot:</label>
                          <select
                            value={resTime}
                            onChange={(e) => setResTime(e.target.value)}
                            className="w-full p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono"
                          >
                            <option value="19:00">07:00 PM - Evening</option>
                            <option value="19:30">07:30 PM - Prime Dining</option>
                            <option value="20:30">08:30 PM - Late Dinner</option>
                          </select>
                        </div>
                        <button
                          type="button"
                          onClick={() => setResConfirmed(true)}
                          className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-colors"
                        >
                          Generate Instant Reservation Pass
                        </button>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <span className="text-xs font-mono text-slate-400 block mb-2">Today's Chef Specials</span>
                      <div className="space-y-2 text-xs font-mono">
                        <div className="p-2.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                          <span className="font-bold text-slate-900 dark:text-white block">Paneer Lababdar Delight</span>
                          <span className="text-slate-500 text-[11px]">Smoked cottage cheese in rich makhani gravy • ₹280</span>
                        </div>
                        <div className="p-2.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                          <span className="font-bold text-slate-900 dark:text-white block">Odisha Spiced Prawn Curry</span>
                          <span className="text-slate-500 text-[11px]">Fresh river prawns tempered with mustard &amp; curry leaves • ₹360</span>
                        </div>
                      </div>
                      {resConfirmed && (
                        <div className="mt-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
                          ✓ Table Reserved! Pass ID #A9-RES-882 confirmed for {resGuests} guests at {resTime}.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* EATM Smart School Demo */}
              {project.interactiveType === 'smart-school' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-lime-500/10 border border-lime-500/20 text-xs text-lime-600 dark:text-lime-400 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4 text-lime-500" />
                      <span className="font-semibold font-mono">EATM STUDENT PORTAL &amp; ACADEMIC HUB</span>
                    </div>
                    <span className="font-mono">Semester IV • CSE Dept</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                      <span className="text-slate-400 block mb-1">Attendance Percentage</span>
                      <span className="text-3xl font-extrabold text-lime-500 block">84.6%</span>
                      <span className="text-emerald-500 text-[11px]">Safe Status (&gt; 75%)</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 col-span-2">
                      <span className="text-slate-400 block mb-2">Today's Lecture Schedule</span>
                      <div className="space-y-1.5">
                        <div className="flex justify-between p-1.5 rounded bg-white dark:bg-slate-800">
                          <span>10:00 AM • Data Structures &amp; Algorithms</span>
                          <span className="text-lime-500">Room 304</span>
                        </div>
                        <div className="flex justify-between p-1.5 rounded bg-white dark:bg-slate-800">
                          <span>11:30 AM • Database Management Systems (MySQL)</span>
                          <span className="text-lime-500">Lab 2</span>
                        </div>
                        <div className="flex justify-between p-1.5 rounded bg-white dark:bg-slate-800">
                          <span>02:00 PM • Python Machine Learning Lab</span>
                          <span className="text-lime-500">CS Lab 5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* RUDRAM 2.0 Demo */}
              {project.interactiveType === 'rudram-telemetry' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-xs text-pink-500 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Radio className="w-4 h-4 animate-ping" />
                      <span className="font-semibold font-mono">RUDRAM 2.0 EMERGENCY COMMAND CONSOLE</span>
                    </div>
                    <span className="font-mono bg-pink-500/20 px-2 py-0.5 rounded">NODE ACTIVE</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-4 rounded-xl bg-slate-950 text-slate-300 border border-pink-500/30 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Telemetry Feed:</span>
                        <span className="text-pink-400 font-bold">Cyclone &amp; Flood Grid</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">River Basin Sensor:</span>
                        <span className="text-emerald-400">Mahanadi Delta (2.4m Safe)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Relief Packets Ready:</span>
                        <span className="text-cyan-400">1,200 Medical &amp; Ration Units</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Drone Recon Unit:</span>
                        <span className="text-amber-400">Patrolling Coastline Zone 4</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                      <div>
                        <span className="text-slate-400 block mb-2">Emergency Resource Allocator</span>
                        <p className="text-slate-500 text-[11px] mb-3">
                          Allocate response units and dispatch relief supplies dynamically to affected evacuation zones.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => alert("Emergency deployment package dispatched to Kujang & Basudevpur sector!")}
                        className="py-2.5 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold text-xs"
                      >
                        Dispatch Emergency Relief Package →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                <h4 className="font-serif font-bold text-base text-slate-900 dark:text-white mb-2">
                  System Architecture &amp; Implementation Details
                </h4>
                <p>{project.fullOverview || project.description}</p>
              </div>

              {project.metrics && (
                <div className="grid grid-cols-3 gap-3">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center"
                    >
                      <span className="block text-lg font-bold font-mono text-brand-blue dark:text-brand-electric">
                        {m.value}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">{m.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* FEATURES TAB */}
          {activeTab === 'features' && (
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-base text-slate-900 dark:text-white mb-3">
                Key Engineering Highlights
              </h4>
              {(project.keyFeatures || [
                'Responsive cross-device interface built with modern performance standards',
                'Modular component architecture with clean separation of concerns',
                'Robust error handling and validation workflows',
                'Optimized asset loading and lightweight client footprint',
              ]).map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center space-x-3 text-sm text-slate-700 dark:text-slate-300"
                >
                  <span className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center text-xs font-mono font-bold flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Pills & External Links */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-brand-blue dark:text-brand-electric font-semibold hover:underline"
            >
              <span>View on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
