import { PlayComponent } from './play.component';




function setup() {
    const apiServiceSpy =
      jasmine.createSpyObj('ApiService', ['getAllQuizzes']);
    const playComponentSpy =
      jasmine.createSpyObj('PlayComponent', ['ngOnInit']);
    const stubValue = 'stub value';
    const playComponent = new PlayComponent(apiServiceSpy);
  
    apiServiceSpy.getAllQuizzes.and.returnValue(stubValue);
    playComponentSpy.ngOnInit.and.returnValue(stubValue);
    return { playComponent, stubValue, apiServiceSpy, playComponentSpy };
  }

describe('PlayComponent without Angular testing support', () => {
  let pComponent: PlayComponent;
    
    it('should create play component', () => {
        const { playComponent } = setup();
        expect(playComponent).toBeTruthy();
        
      
    });


    it('#getAllQuizzes should return stubbed value from a spy', () => {
        const { playComponent, stubValue, apiServiceSpy, playComponentSpy } = setup();
        expect(playComponentSpy.ngOnInit())
          .toBe(stubValue, 'service returned stub value');
        expect(apiServiceSpy.getAllQuizzes())
          .toBe(stubValue, 'service returned stub value');
        expect(apiServiceSpy.getAllQuizzes.calls.count())
          .toBe(1, 'spy method was called once');
        expect(apiServiceSpy.getAllQuizzes.calls.mostRecent().returnValue)
          .toBe(stubValue);
      });

    
  });