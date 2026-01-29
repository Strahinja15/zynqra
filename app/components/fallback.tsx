import DataTable from './DataTable';

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback" className="p-4">
      <div className="header flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-slate-700 animate-pulse" />
        <div className="info flex flex-col gap-2">
          <div className="h-4 bg-slate-700 rounded w-48 animate-pulse" />
          <div className="h-6 bg-slate-700 rounded w-32 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export const TrendingCoinsFallback = () => {
  const columns = [
    {
      header: 'Name',
      cellClassName: 'name-cell',
      cell: () => (
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-slate-700 animate-pulse" />
          <div className="h-4 bg-slate-700 rounded w-24 animate-pulse" />
        </div>
      ),
    },
    {
      header: '24h Change',
      cellClassName: 'name-cell',
      cell: () => (
        <div className="h-4 bg-slate-700 rounded w-12 animate-pulse" />
      ),
    },
    {
      header: 'Price',
      cellClassName: 'price-cell',
      cell: () => <div className="h-4 bg-slate-700 rounded w-20 animate-pulse" />,
    },
  ];

  const placeholderData = new Array(5).fill(0).map((_, i) => ({
    item: { id: `skeleton-${i}` },
  }));

  return (
    <div id="trending-coins-fallback" className="p-4">
      <DataTable
        columns={columns}
        data={placeholderData}
        rowKey={(r, i: number) => r.item.id || i}
      />
    </div>
  );
};

export default null;
