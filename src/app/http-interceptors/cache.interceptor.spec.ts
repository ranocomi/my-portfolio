import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CacheInterceptor } from './cache.interceptor';  // Ensure this path is correct

describe('CacheInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
    ]
  }));

  it('should be created', () => {
    const interceptor: CacheInterceptor = TestBed.inject(CacheInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
