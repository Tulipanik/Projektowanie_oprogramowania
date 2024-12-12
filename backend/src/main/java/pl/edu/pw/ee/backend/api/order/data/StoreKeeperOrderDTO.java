package pl.edu.pw.ee.backend.api.order.data;

import lombok.Builder;

import java.util.List;

@Builder
public record StoreKeeperOrderDTO(List<String> meals, List<Integer> mealsIds, int orderId) {
}
