'use client';

import { useEffect, useRef, useState } from 'react';

type Category = 'Bank Account' | 'Mid-Term' | 'Long-Term';

interface Row {
  id: number;
  category: Category;
  notes: string;
  value: number;
}

const COLORS: Record<Category, string> = {
  'Bank Account': '#22d3ee',
  'Mid-Term':     '#818cf8',
  'Long-Term':    '#a855f7',
};

const INITIAL_ROWS: Row[] = [
  { id: 1,  category: 'Bank Account', notes: 'Checking',    value: 0 },
  { id: 2,  category: 'Bank Account', notes: 'Savings',     value: 0 },
  { id: 3,  category: 'Bank Account', notes: 'Savings',     value: 0 },
  { id: 4,  category: 'Mid-Term',     notes: 'Mutual Fund', value: 0 },
  { id: 5,  category: 'Mid-Term',     notes: 'Mutual Fund', value: 0 },
  { id: 6,  category: 'Mid-Term',     notes: 'Mutual Fund', value: 0 },
  { id: 7,  category: 'Mid-Term',     notes: 'Mutual Fund', value: 0 },
  { id: 8,  category: 'Long-Term',    notes: 'IRA',         value: 0 },
  { id: 9,  category: 'Long-Term',    notes: '401k',        value: 0 },
  { id: 10, category: 'Long-Term',    notes: '401k',        value: 0 },
];

function fmt(n: number) {
  return '$' + Math.round(n).toLocaleString();
}

export default function FintechPage() {
  const [netWorth, setNetWorth] = useState(1000000);
  const [rows, setRows] = useState<Row[]>(INITIAL_ROWS);
  const [nextId, setNextId] = useState(11);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const totalAllocated = rows.reduce((s, r) => s + r.value, 0);

  const catTotals: Record<Category, number> = {
    'Bank Account': 0,
    'Mid-Term': 0,
    'Long-Term': 0,
  };
  rows.forEach(r => { catTotals[r.category] += r.value; });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const cx = 100, cy = 100, r = 85, inner = 55;
    ctx.clearRect(0, 0, 200, 200);

    const slices: { value: number; color: string }[] = [
      { value: catTotals['Bank Account'], color: COLORS['Bank Account'] },
      { value: catTotals['Mid-Term'],     color: COLORS['Mid-Term'] },
      { value: catTotals['Long-Term'],    color: COLORS['Long-Term'] },
    ];
    const total = slices.reduce((s, sl) => s + sl.value, 0) || 1;
    let angle = -Math.PI / 2;
    slices.forEach(sl => {
      const sweep = (sl.value / total) * 2 * Math.PI;
      if (sweep === 0) return;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, angle, angle + sweep);
      ctx.closePath();
      ctx.fillStyle = sl.color;
      ctx.fill();
      angle += sweep;
    });
    ctx.beginPath();
    ctx.arc(cx, cy, inner, 0, 2 * Math.PI);
    ctx.fillStyle = '#1a1d2a';
    ctx.fill();

    ctx.fillStyle = '#9ca3af';
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Allocated', cx, cy - 6);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText(fmt(totalAllocated), cx, cy + 12);
  }, [catTotals, totalAllocated]);

  function updateRow(id: number, field: keyof Row, val: string | number) {
    setRows(rows.map(r => r.id === id ? { ...r, [field]: val } : r));
  }

  function addRow() {
    setRows([...rows, { id: nextId, category: 'Bank Account', notes: '', value: 0 }]);
    setNextId(nextId + 1);
  }

  return (
    <div style={{ background: '#0f1117', minHeight: '100vh', padding: '32px 24px', color: '#e2e8f0', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: 24 }}>
          Enter your total net worth, then allocate it across categories.
        </p>

        {/* Net Worth Input */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 8 }}>
            Total Net Worth
          </div>
          <div style={{ display: 'flex', alignItems: 'center', background: '#1e2433', border: '1px solid #2d3748', borderRadius: 8, width: 220, padding: '8px 12px' }}>
            <span style={{ color: '#64748b', marginRight: 8 }}>$</span>
            <input
              type="number"
              value={netWorth}
              onChange={e => setNetWorth(parseFloat(e.target.value) || 0)}
              style={{ background: 'none', border: 'none', color: '#e2e8f0', fontSize: '1rem', outline: 'none', width: '100%' }}
            />
          </div>
        </div>

        {/* Allocations Table */}
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: 16 }}>Allocations</h2>
        <div style={{ background: '#161b27', border: '1px solid #1e2433', borderRadius: 10, overflow: 'hidden', marginBottom: 40 }}>
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '40px 160px 1fr 180px 100px', gap: 0, background: '#1a1f2e', padding: '10px 16px', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#64748b' }}>
            <div>#</div>
            <div>Category</div>
            <div>Notes</div>
            <div style={{ textAlign: 'right' }}>Dollar Value</div>
            <div style={{ textAlign: 'right' }}>% of Net Worth</div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => {
            const pct = netWorth ? (row.value / netWorth * 100).toFixed(1) : '0.0';
            return (
              <div key={row.id} style={{ display: 'grid', gridTemplateColumns: '40px 160px 1fr 180px 100px', gap: 0, padding: '8px 16px', borderTop: '1px solid #1e2433', alignItems: 'center' }}>
                <div style={{ color: '#475569', fontSize: '0.85rem' }}>{i + 1}</div>
                <div>
                  <select
                    value={row.category}
                    onChange={e => updateRow(row.id, 'category', e.target.value as Category)}
                    style={{ background: '#1e2433', border: '1px solid #2d3748', borderRadius: 6, color: '#e2e8f0', fontSize: '0.85rem', padding: '4px 8px', cursor: 'pointer', outline: 'none' }}
                  >
                    <option>Bank Account</option>
                    <option>Mid-Term</option>
                    <option>Long-Term</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    value={row.notes}
                    onChange={e => updateRow(row.id, 'notes', e.target.value)}
                    style={{ background: '#1e2433', border: '1px solid #2d3748', borderRadius: 6, color: '#e2e8f0', fontSize: '0.85rem', padding: '4px 10px', outline: 'none', width: '90%' }}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'flex-end' }}>
                  <span style={{ color: '#64748b' }}>$</span>
                  <input
                    type="number"
                    value={row.value || ''}
                    placeholder="0"
                    onChange={e => updateRow(row.id, 'value', parseFloat(e.target.value) || 0)}
                    style={{ background: '#1e2433', border: '1px solid #2d3748', borderRadius: 6, color: '#e2e8f0', fontSize: '0.85rem', padding: '4px 10px', outline: 'none', width: 110, textAlign: 'right' }}
                  />
                </div>
                <div style={{ textAlign: 'right', fontSize: '0.85rem', color: '#94a3b8' }}>{pct}%</div>
              </div>
            );
          })}

          {/* Add Row */}
          <div
            onClick={addRow}
            style={{ padding: '12px 16px', textAlign: 'center', color: '#475569', fontSize: '0.85rem', borderTop: '1px solid #1e2433', cursor: 'pointer', transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#94a3b8')}
            onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
          >
            + Add Row
          </div>

          {/* Totals */}
          <div style={{ display: 'grid', gridTemplateColumns: '40px 160px 1fr 180px 100px', padding: '12px 16px', borderTop: '1px solid #2d3748', background: '#1a1f2e' }}>
            <div />
            <div />
            <div style={{ textAlign: 'right', fontWeight: 600, color: '#94a3b8', fontSize: '0.85rem' }}>Totals</div>
            <div style={{ textAlign: 'right', fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>{fmt(totalAllocated)}</div>
            <div style={{ textAlign: 'right', fontWeight: 600, color: '#94a3b8', fontSize: '0.85rem' }}>
              {netWorth ? (totalAllocated / netWorth * 100).toFixed(1) : '0.0'}%
            </div>
          </div>
        </div>

        {/* Donut Chart */}
        <div style={{ background: '#161b27', border: '1px solid #1e2433', borderRadius: 10, padding: 32, display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
          <canvas ref={canvasRef} width={200} height={200} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {(Object.entries(catTotals) as [Category, number][]).map(([cat, val]) => (
              <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 12, height: 12, borderRadius: 3, background: COLORS[cat], flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8' }}>{cat}</div>
                  <div style={{ fontSize: '0.9rem' }}>
                    <span style={{ color: '#fff', fontWeight: 600 }}>{fmt(val)}</span>
                    {' '}
                    <span style={{ color: COLORS[cat], fontSize: '0.8rem' }}>
                      {netWorth ? (val / netWorth * 100).toFixed(1) : '0.0'}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
