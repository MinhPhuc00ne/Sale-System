import { createContext, useContext, useState } from "react";

export type DeliveryStatus =
  | "PROCESSING"
  | "SHIPPING"
  | "DELIVERED";

export interface DeliveryOrder {
  id: string;
  createdAt: string;
  items: any[];
  total: number;
  status: DeliveryStatus;
  address: string;
  receiver: string;
  phone: string;
}

interface DeliveryContextType {
  orders: DeliveryOrder[];
  addOrder: (order: DeliveryOrder) => void;
  markDelivered: (id: string) => void;
  activeCount: number;
}

const DeliveryContext = createContext<DeliveryContextType>(
  {} as DeliveryContextType
);

export const DeliveryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [orders, setOrders] = useState<DeliveryOrder[]>([]);

  const addOrder = (order: DeliveryOrder) => {
    setOrders((prev) => [order, ...prev]);
  };

  const markDelivered = (id: string) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === id ? { ...o, status: "DELIVERED" } : o
      )
    );
  };

  const activeCount = orders.filter(
    (o) => o.status !== "DELIVERED"
  ).length;

  return (
    <DeliveryContext.Provider
      value={{
        orders,
        addOrder,
        markDelivered,
        activeCount,
      }}
    >
      {children}
    </DeliveryContext.Provider>
  );
};

export const useDelivery = () =>
  useContext(DeliveryContext);
