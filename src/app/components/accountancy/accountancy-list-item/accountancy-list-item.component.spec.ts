import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AccountancyListItemComponent } from './accountancy-list-item.component'

describe('AccountancyListItemComponent', () => {
    let component: AccountancyListItemComponent
    let fixture: ComponentFixture<AccountancyListItemComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AccountancyListItemComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(AccountancyListItemComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
