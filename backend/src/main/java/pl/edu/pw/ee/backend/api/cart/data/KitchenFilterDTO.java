package pl.edu.pw.ee.backend.api.cart.data;

import lombok.Builder;
import java.util.List;

@Builder
public record KitchenFilterDTO(List<String> values) {
}
