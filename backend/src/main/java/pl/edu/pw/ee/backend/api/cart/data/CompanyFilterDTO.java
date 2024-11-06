package pl.edu.pw.ee.backend.api.cart.data;

import lombok.Builder;
import org.hibernate.query.SortDirection;

import java.util.List;

@Builder
public record CompanyFilterDTO(SortDirection sorting, List<String> values) {
}
